"use client";

import { useState } from "react";

interface NewsSearchProps {
  onSearch: (question: string, numArticles: number) => void;
  loading: boolean;
  mobile: boolean;
}

export default function NewsSearch({ onSearch, loading, mobile }: NewsSearchProps) {
  const [question, setQuestion] = useState("");
  const [numArticles, setNumArticles] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && !loading) {
      onSearch(question.trim(), numArticles);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about current events... (e.g., 'What's happening with the economy?)"
          className={`w-full p-4 bg-foreground text-text border border-textAlternative/30 rounded-lg
            focus:outline-none focus:border-textAlternative resize-none
            placeholder:text-text/50 ${mobile ? "text-base" : "text-lg"}`}
          rows={3}
          disabled={loading}
        />
      </div>

      <div className={`flex gap-4 ${mobile ? "flex-col" : "flex-row items-center"}`}>
        <div className="flex items-center gap-2">
          <label htmlFor="numArticles" className="text-text text-sm">
            Number of sources:
          </label>
          <select
            id="numArticles"
            value={numArticles}
            onChange={(e) => setNumArticles(Number(e.target.value))}
            className="bg-foreground text-text border border-textAlternative/30 rounded px-3 py-2
              focus:outline-none focus:border-textAlternative"
            disabled={loading}
          >
            {[3, 5, 7, 10].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading || !question.trim()}
          className={`px-6 py-2 bg-textAlternative text-background font-semibold rounded-lg
            hover:bg-textAlternative/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed
            ${mobile ? "w-full" : ""}`}
        >
          {loading ? "Searching..." : "Search News"}
        </button>
      </div>
    </form>
  );
}
