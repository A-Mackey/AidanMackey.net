"use client";

import { NewsResponse, NewsSource } from "@/app/ai-dan/news/page";

interface NewsResultsProps {
  response: NewsResponse | null;
  loading: boolean;
  error: string | null;
  mobile: boolean;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function SourceCard({ source, index }: { source: NewsSource; index: number }) {
  const similarityPercent = Math.round(source.similarity * 100);

  return (
    <div className="bg-foreground border border-textAlternative/20 rounded-lg p-4 space-y-3">
      <div className="flex justify-between items-start gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-textAlternative font-mono text-sm">[{index + 1}]</span>
            <span className="text-text/60 text-xs uppercase tracking-wide">{source.provider}</span>
            <span className="text-text/40 text-xs">•</span>
            <span className="text-text/60 text-xs">{source.category}</span>
          </div>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-textAlternative transition-colors font-medium block mt-1 break-words"
          >
            {source.title}
          </a>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-textAlternative text-sm font-mono">{similarityPercent}%</div>
          <div className="text-text/50 text-xs">match</div>
        </div>
      </div>

      <p className="text-text/70 text-sm">{formatDate(source.published_at)}</p>

      <details className="group">
        <summary className="text-textAlternative text-sm cursor-pointer hover:text-textAlternative/80 list-none flex items-center gap-1">
          <span className="group-open:rotate-90 transition-transform">▶</span>
          View summary
        </summary>
        <div className="mt-3 text-text text-sm leading-relaxed whitespace-pre-wrap pl-4 border-l-2 border-textAlternative/30">
          {source.summary}
        </div>
      </details>
    </div>
  );
}

export default function NewsResults({ response, loading, error, mobile }: NewsResultsProps) {
  if (loading) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-textAlternative border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-text/70">Searching news articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  if (!response) {
    return null;
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-foreground border border-textAlternative/30 rounded-lg p-6">
        <h2 className="text-textAlternative font-semibold mb-3">Answer</h2>
        <p className="text-text leading-relaxed whitespace-pre-wrap">{response.answer}</p>
      </div>

      <div>
        <h2 className={`text-text font-semibold mb-4 ${mobile ? "text-lg" : "text-xl"}`}>
          Sources ({response.sources.length})
        </h2>
        <div className="space-y-4">
          {response.sources.map((source, index) => (
            <SourceCard key={source.id} source={source} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
