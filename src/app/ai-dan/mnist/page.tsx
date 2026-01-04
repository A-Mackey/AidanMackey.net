"use client";

import { useRef } from "react";
import FadeIn from "@/components/fadeIn";
import useScreenSize from "@/hooks/useScreenSize";
import Overlay from "@/components/overlay";
import NavBar from "@/components/navbar";
import DrawingCanvas from "@/components/mnist/DrawingCanvas";
import PredictionDisplay from "@/components/mnist/PredictionDisplay";
import { useMnistWebSocket } from "@/hooks/useMnistWebSocket";

export default function MNISTPage() {
  const { mobile, mounted } = useScreenSize();
  const gridRef = useRef<number[]>(new Array(784).fill(0));
  const { prediction, connected, error, sendPrediction, clearPrediction } = useMnistWebSocket();

  return (
    <div className="min-h-screen bg-background">
      <Overlay>
        <NavBar />
      </Overlay>
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="mt-10 max-w-5xl px-5 w-screen py-10">
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
              <DrawingCanvas
                connected={connected}
                onDraw={(data) => sendPrediction(data)}
                onDrawEnd={(data) => sendPrediction(data, true)}
                onClear={clearPrediction}
                gridRef={gridRef}
              />
              <PredictionDisplay prediction={prediction} error={error} />
            </div>
          </FadeIn>

          <FadeIn duration={600}>
            <div className="mt-12 text-textAlternative text-sm space-y-3">
              <p>
                Powered by a neural network library I built from scratch in C++, running on the CPU. No TensorFlow, no PyTorch. Just raw matrix math, backpropagation, and optimization implemented by hand.
              </p>
              <ul>
                <li className="pl-4 text-text"> - <a className="text-textAlternative" href="https://github.com/A-mackey/ai-dan-core">GitHub Repo</a></li>
                <li className="pl-4 text-text"> - <a className="text-textAlternative" href="https://pypi.org/project/ai-dan-core/">PIP Package</a></li>
              </ul>
              <p>
                <span className="text-text font-semibold">Architecture:</span>{" "}
                784-256-128-10 fully-connected network. ReLU activations, softmax output, cross-entropy loss.
              </p>
              <p>
                <span className="text-text font-semibold">Training:</span>{" "}
                Adam optimizer (lr=0.001, β₁=0.9, β₂=0.999). Batch size 32. 96%+ accuracy on 10k test set.
              </p>
              <p>
                <span className="text-text font-semibold">Implementation:</span>{" "}
                C++23. Multi-threaded with adaptive parallelism. ~3k samples/sec throughput.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
