"use client";

import { useState } from "react";
import { SearchMode } from "@/app/ai-dan/news/page";

interface NewsSearchProps {
  onSearch: (question: string) => void;
  loading: boolean;
  mobile: boolean;
  mode: SearchMode;
  onModeChange: (mode: SearchMode) => void;
}

export default function NewsSearch({ onSearch, loading, mobile, mode, onModeChange }: NewsSearchProps) {
  const [question, setQuestion] = useState("");

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
            ? "Ask about current events... (e.g., 'What's happening with the economy?')"
            : "Search for articles... (e.g., 'climate change policy')"
          }
          className={`w-full p-4 bg-foreground text-text border border-textAlternative/30 rounded-lg
            focus:outline-none focus:border-textAlternative resize-none
            placeholder:text-text/50 ${mobile ? "text-base" : "text-lg"}`}
          rows={3}
          disabled={loading}
        />
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
