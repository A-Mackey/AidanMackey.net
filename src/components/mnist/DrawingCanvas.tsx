"use client";

import { useCallback, useEffect, useRef } from "react";

const CANVAS_SIZE = 280;
const GRID_SIZE = 28;
const PIXEL_SIZE = CANVAS_SIZE / GRID_SIZE;

interface DrawingCanvasProps {
  connected: boolean;
  onDraw: (gridData: number[]) => void;
  onDrawEnd: (gridData: number[]) => void;
  onClear: () => void;
  gridRef: React.MutableRefObject<number[]>;
}

export default function DrawingCanvas({
  connected,
  onDraw,
  onDrawEnd,
  onClear,
  gridRef,
}: DrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }, []);

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
  }, [gridRef]);

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

  const drawAtPos = (x: number, y: number) => {
    const brushPattern = [
      { dx: 0, dy: 0, weight: 1.0 },
      { dx: -1, dy: 0, weight: 0.8 },
      { dx: 1, dy: 0, weight: 0.8 },
      { dx: 0, dy: -1, weight: 0.8 },
      { dx: 0, dy: 1, weight: 0.8 },
      { dx: -1, dy: -1, weight: 0.5 },
      { dx: 1, dy: -1, weight: 0.5 },
      { dx: -1, dy: 1, weight: 0.5 },
      { dx: 1, dy: 1, weight: 0.5 },
    ];

    brushPattern.forEach(({ dx, dy, weight }) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < GRID_SIZE && ny >= 0 && ny < GRID_SIZE) {
        const idx = ny * GRID_SIZE + nx;
        gridRef.current[idx] = Math.min(1, gridRef.current[idx] + weight * 0.7);
      }
    });
  };

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
      onDraw([...gridRef.current]);
    }
  };

  const handleEnd = () => {
    if (isDrawingRef.current) {
      isDrawingRef.current = false;
      lastPosRef.current = null;
      onDrawEnd([...gridRef.current]);
    }
  };

  const handleClear = () => {
    gridRef.current = new Array(784).fill(0);
    redrawCanvas();
    onClear();
  };

  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX, e.clientY);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX, e.clientY);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => handleEnd();

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

  return (
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
        <div
          className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
            connected ? "bg-green-500" : "bg-red-500"
          }`}
          title={connected ? "Connected" : "Disconnected"}
        />
      </div>
      <button
        onClick={handleClear}
        className="mt-4 px-6 py-2 bg-textAlternative text-background rounded-lg hover:opacity-80 transition-opacity font-semibold"
      >
        Clear
      </button>
    </div>
  );
}
