"use client";

import { useState, useEffect } from "react";
import { SearchMode } from "@/app/ai-dan/news/page";

const EXAMPLE_QUERIES = [
  "What's going on in the news today?",
  "Tell me about the stock market",
  "Are there any recent news stories about the US government?",
  "What's happening in the tech industry?",
  "Any updates on climate change?",
  "What are the latest developments in AI?",
  "Is there any breaking news right now?",
  "What's happening in the Middle East?",
  "Any recent natural disasters?",
  "What's going on in the world of sports?",
  "Tell me about recent economic policy changes",
  "What are the latest healthcare headlines?",
  "Any news about space exploration?",
  "What's happening in European politics?",
];

function pickRandom<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

interface NewsSearchProps {
  onSearch: (question: string) => void;
  loading: boolean;
  mobile: boolean;
  mode: SearchMode;
  onModeChange: (mode: SearchMode) => void;
}

export default function NewsSearch({ onSearch, loading, mobile, mode, onModeChange }: NewsSearchProps) {
  const [question, setQuestion] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    setSuggestions(pickRandom(EXAMPLE_QUERIES, 4));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && !loading) {
      onSearch(question.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={mode === "ai"
            ? "Ask about current events..."
            : "Search for articles... (e.g., 'climate change policy')"
          }
          className={`w-full p-4 bg-foreground text-text border border-textAlternative/30 rounded-lg
            focus:outline-none focus:border-textAlternative resize-none
            placeholder:text-text/50 ${mobile ? "text-base" : "text-lg"}`}
          rows={3}
          disabled={loading}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => setQuestion(suggestion)}
            className="px-3 py-1 text-sm text-text/70 border border-textAlternative/20 rounded-full
              hover:border-textAlternative/50 hover:text-text transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <div className={`flex gap-4 ${mobile ? "flex-col" : "flex-row items-center justify-between"}`}>
        <div className="flex bg-foreground border border-textAlternative/30 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => onModeChange("ai")}
            className={`px-4 py-2 text-sm transition-colors ${
              mode === "ai"
                ? "bg-textAlternative text-background font-semibold"
                : "text-text hover:text-textAlternative"
            }`}
          >
            AI-Enhanced Summary
          </button>
          <button
            type="button"
            onClick={() => onModeChange("semantic")}
            className={`px-4 py-2 text-sm transition-colors ${
              mode === "semantic"
                ? "bg-textAlternative text-background font-semibold"
                : "text-text hover:text-textAlternative"
            }`}
          >
            Semantic Search
          </button>
        </div>

        <button
          type="submit"
          disabled={loading || !question.trim()}
          className={`px-6 py-2 bg-textAlternative text-background font-semibold rounded-lg
            hover:bg-textAlternative/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed
            ${mobile ? "w-full" : ""}`}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}
