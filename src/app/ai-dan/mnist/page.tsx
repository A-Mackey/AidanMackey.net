"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import FadeIn from "@/components/fadeIn";
import useScreenSize from "@/hooks/useScreenSize";

interface PredictionResult {
  predictions: number[];
  digit: number;
}

const CANVAS_SIZE = 280; // Visual size
const GRID_SIZE = 28; // MNIST resolution
const PIXEL_SIZE = CANVAS_SIZE / GRID_SIZE;

// WebSocket URL - use environment variable or fallback
const WS_URL = process.env.NEXT_PUBLIC_MNIST_WS_URL || "wss://backend.aidanmackey.net/ws";

export default function MNISTPage() {
  const { mobile, mounted } = useScreenSize();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<number[]>(new Array(784).fill(0));
  const isDrawingRef = useRef(false);
  const wsRef = useRef<WebSocket | null>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Connect to WebSocket
  useEffect(() => {
    let isMounted = true;
    let reconnectTimeout: NodeJS.Timeout | null = null;

    const connect = () => {
      if (!isMounted) return;

      console.log("[MNIST] Attempting WebSocket connection to:", WS_URL);
      const ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        console.log("[MNIST] WebSocket connected");
        setConnected(true);
        setError(null);
      };

      ws.onclose = (event) => {
        console.log("[MNIST] WebSocket closed:", event.code, event.reason);
        setConnected(false);
        // Attempt reconnect after 3 seconds
        if (isMounted) {
          reconnectTimeout = setTimeout(connect, 3000);
        }
      };

      ws.onerror = (event) => {
        console.error("[MNIST] WebSocket error:", event);
        setError("Connection error - is the backend running?");
        setConnected(false);
      };

      ws.onmessage = (event) => {
        console.log("[MNIST] Received message:", event.data);
        try {
          const data = JSON.parse(event.data);
          if (data.type === "mnist_result") {
            setPrediction({
              predictions: data.predictions,
              digit: data.digit,
            });
          } else if (data.type === "error") {
            setError(data.message);
          }
        } catch {
          setError("Failed to parse response");
        }
      };

      wsRef.current = ws;
    };

    connect();

    return () => {
      isMounted = false;
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  // Send prediction request
  const sendPrediction = useCallback(() => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: "mnist",
          data: gridRef.current,
        })
      );
    }
  }, []);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }, []);

  // Redraw canvas from grid
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    for (let i = 0; i < 784; i++) {
      const x = i % GRID_SIZE;
      const y = Math.floor(i / GRID_SIZE);
      const value = gridRef.current[i];
      if (value > 0) {
        const gray = Math.floor(value * 255);
        ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
        ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
      }
    }
  }, []);

  // Get grid coordinates from canvas position
  const getGridPos = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((clientX - rect.left) / rect.width) * GRID_SIZE);
    const y = Math.floor(((clientY - rect.top) / rect.height) * GRID_SIZE);

    if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
      return { x, y };
    }
    return null;
  };

  // Draw on grid with brush
  const drawAtPos = (x: number, y: number) => {
    // Draw with a soft brush (affects neighboring pixels)
    const brushPattern = [
      { dx: 0, dy: 0, weight: 1.0 },
      { dx: -1, dy: 0, weight: 0.5 },
      { dx: 1, dy: 0, weight: 0.5 },
      { dx: 0, dy: -1, weight: 0.5 },
      { dx: 0, dy: 1, weight: 0.5 },
      { dx: -1, dy: -1, weight: 0.25 },
      { dx: 1, dy: -1, weight: 0.25 },
      { dx: -1, dy: 1, weight: 0.25 },
      { dx: 1, dy: 1, weight: 0.25 },
    ];

    brushPattern.forEach(({ dx, dy, weight }) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < GRID_SIZE && ny >= 0 && ny < GRID_SIZE) {
        const idx = ny * GRID_SIZE + nx;
        gridRef.current[idx] = Math.min(1, gridRef.current[idx] + weight * 0.3);
      }
    });
  };

  // Interpolate between two points for smooth lines
  const interpolate = (
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    callback: (x: number, y: number) => void
  ) => {
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const steps = Math.max(dx, dy);

    for (let i = 0; i <= steps; i++) {
      const t = steps === 0 ? 0 : i / steps;
      const x = Math.round(x0 + (x1 - x0) * t);
      const y = Math.round(y0 + (y1 - y0) * t);
      callback(x, y);
    }
  };

  // Handle mouse/touch events
  const handleStart = (clientX: number, clientY: number) => {
    isDrawingRef.current = true;
    const pos = getGridPos(clientX, clientY);
    if (pos) {
      lastPosRef.current = pos;
      drawAtPos(pos.x, pos.y);
      redrawCanvas();
    }
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDrawingRef.current) return;

    const pos = getGridPos(clientX, clientY);
    if (pos) {
      if (lastPosRef.current) {
        interpolate(
          lastPosRef.current.x,
          lastPosRef.current.y,
          pos.x,
          pos.y,
          drawAtPos
        );
      } else {
        drawAtPos(pos.x, pos.y);
      }
      lastPosRef.current = pos;
      redrawCanvas();
    }
  };

  const handleEnd = () => {
    if (isDrawingRef.current) {
      isDrawingRef.current = false;
      lastPosRef.current = null;
      sendPrediction();
    }
  };

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX, e.clientY);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX, e.clientY);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => handleEnd();

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    handleEnd();
  };

  // Clear canvas
  const clearCanvas = () => {
    gridRef.current = new Array(784).fill(0);
    redrawCanvas();
    setPrediction(null);
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-background">
      <div className="max-w-5xl px-5 w-screen py-10">
        <FadeIn>
          <h1
            className={`font-bold text-text mb-2 ${
              mounted && mobile ? "text-3xl" : "text-5xl"
            }`}
          >
            {"<MNIST_Demo/>"}
          </h1>
          <p className="text-textAlternative mb-8">
            Draw a digit (0-9) and watch the neural network predict in real-time
          </p>
        </FadeIn>

        <FadeIn duration={400}>
          <div
            className={`flex gap-8 ${
              mounted && mobile ? "flex-col items-center" : "flex-row"
            }`}
          >
            {/* Canvas Section */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  width={CANVAS_SIZE}
                  height={CANVAS_SIZE}
                  className="border-2 border-textAlternative rounded-lg cursor-crosshair touch-none"
                  onMouseDown={onMouseDown}
                  onMouseMove={onMouseMove}
                  onMouseUp={onMouseUp}
                  onMouseLeave={onMouseLeave}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                />
                {/* Connection status indicator */}
                <div
                  className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                    connected ? "bg-green-500" : "bg-red-500"
                  }`}
                  title={connected ? "Connected" : "Disconnected"}
                />
              </div>
              <button
                onClick={clearCanvas}
                className="mt-4 px-6 py-2 bg-textAlternative text-background rounded-lg hover:opacity-80 transition-opacity font-semibold"
              >
                Clear
              </button>
            </div>

            {/* Predictions Section */}
            <div className="flex-1 min-w-[200px]">
              <h2 className="text-2xl font-bold text-text mb-4">Prediction</h2>

              {error && (
                <p className="text-red-500 mb-4">{error}</p>
              )}

              {prediction ? (
                <div>
                  <div className="text-6xl font-bold text-textAlternative mb-6">
                    {prediction.digit}
                  </div>
                  <div className="space-y-2">
                    {prediction.predictions.map((prob, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="w-4 text-text font-mono">{idx}</span>
                        <div className="flex-1 h-4 bg-gray-800 rounded overflow-hidden">
                          <div
                            className="h-full bg-textAlternative transition-all duration-300"
                            style={{ width: `${prob * 100}%` }}
                          />
                        </div>
                        <span className="w-16 text-right text-textAlternative text-sm font-mono">
                          {(prob * 100).toFixed(1)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-textAlternative">
                  Draw a digit to see predictions
                </p>
              )}
            </div>
          </div>
        </FadeIn>

        <FadeIn duration={600}>
          <div className="mt-12 text-textAlternative text-sm">
            <p>
              This demo uses a neural network trained on the MNIST dataset. The
              model runs on a custom neural network implementation built from
              scratch.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
