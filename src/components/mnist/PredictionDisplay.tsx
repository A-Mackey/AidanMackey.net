"use client";

import { PredictionResult } from "@/hooks/useMnistWebSocket";

interface PredictionDisplayProps {
  prediction: PredictionResult | null;
  error: string | null;
}

export default function PredictionDisplay({ prediction, error }: PredictionDisplayProps) {
  return (
    <div className="flex-1 min-w-[200px]">
      <h2 className="text-2xl font-bold text-text mb-4">
        Prediction: <span className="text-textAlternative">{prediction ? prediction.digit : "_"}</span>
      </h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="space-y-2">
        {Array.from({ length: 10 }, (_, idx) => {
          const prob = prediction?.predictions[idx] ?? 0;
          return (
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
          );
        })}
      </div>
    </div>
  );
}
