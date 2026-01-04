"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const WS_URL = process.env.NEXT_PUBLIC_MNIST_WS_URL || "wss://backend.aidanmackey.net/ws";
const GRID_SIZE = 28;
const THROTTLE_MS = 100;

export interface PredictionResult {
  predictions: number[];
  digit: number;
}

export function useMnistWebSocket() {
  const wsRef = useRef<WebSocket | null>(null);
  const lastSendTimeRef = useRef<number>(0);
  const pendingSendRef = useRef<NodeJS.Timeout | null>(null);

  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    let reconnectTimeout: NodeJS.Timeout | null = null;

    const connect = () => {
      if (!isMounted) return;

      const ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        setConnected(true);
        setError(null);
      };

      ws.onclose = () => {
        setConnected(false);
        if (isMounted) {
          reconnectTimeout = setTimeout(connect, 3000);
        }
      };

      ws.onerror = () => {
        setError("Connection error");
        setConnected(false);
      };

      ws.onmessage = (event) => {
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

  const sendPrediction = useCallback((gridData: number[], immediate = false) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;

    const now = Date.now();
    const timeSinceLastSend = now - lastSendTimeRef.current;

    const doSend = () => {
      if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;

      let totalMass = 0;
      let centerX = 0;
      let centerY = 0;

      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
          const val = gridData[y * GRID_SIZE + x];
          totalMass += val;
          centerX += x * val;
          centerY += y * val;
        }
      }

      const centeredData = new Array(784).fill(0);

      if (totalMass > 0) {
        const offsetX = 14 - Math.round(centerX / totalMass);
        const offsetY = 14 - Math.round(centerY / totalMass);

        for (let y = 0; y < GRID_SIZE; y++) {
          for (let x = 0; x < GRID_SIZE; x++) {
            const newX = x + offsetX;
            const newY = y + offsetY;
            if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE) {
              centeredData[newY * GRID_SIZE + newX] = gridData[y * GRID_SIZE + x];
            }
          }
        }
      }

      wsRef.current?.send(JSON.stringify({ type: "mnist", data: centeredData }));
      lastSendTimeRef.current = Date.now();
    };

    if (immediate || timeSinceLastSend >= THROTTLE_MS) {
      if (pendingSendRef.current) {
        clearTimeout(pendingSendRef.current);
        pendingSendRef.current = null;
      }
      doSend();
    } else if (!pendingSendRef.current) {
      pendingSendRef.current = setTimeout(() => {
        pendingSendRef.current = null;
        doSend();
      }, THROTTLE_MS - timeSinceLastSend);
    }
  }, []);

  const clearPrediction = useCallback(() => {
    setPrediction(null);
  }, []);

  return { prediction, connected, error, sendPrediction, clearPrediction };
}
