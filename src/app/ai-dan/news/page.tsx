"use client";

import { useState } from "react";
import FadeIn from "@/components/fadeIn";
import useScreenSize from "@/hooks/useScreenSize";
import Overlay from "@/components/overlay";
import NavBar from "@/components/navbar";
import NewsSearch from "@/components/news/NewsSearch";
import NewsResults from "@/components/news/NewsResults";

export interface NewsSource {
  id: string;
  title: string;
  url: string;
  provider: string;
  category: string;
  summary: string;
  published_at: string;
  similarity: number;
}

export interface NewsResponse {
  answer: string;
  sources: NewsSource[];
}

export default function NewsPage() {
  const { mobile, mounted } = useScreenSize();
  const [response, setResponse] = useState<NewsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (question: string, numArticles: number) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("https://backend.aidanmackey.net/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          num_articles: numArticles,
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const data: NewsResponse = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Overlay>
        <NavBar />
      </Overlay>
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="mt-10 max-w-5xl px-4 sm:px-5 w-full py-10">
          <FadeIn>
            <h1
              className={`font-bold text-text mb-2 ${
                mounted && mobile ? "text-3xl" : "text-5xl"
              }`}
            >
              {"<News_RAG/>"}
            </h1>
            <p className="text-textAlternative mb-8">
              Ask questions about current events and get AI-powered answers with sources
            </p>
          </FadeIn>

          <FadeIn duration={400}>
            <NewsSearch onSearch={handleSearch} loading={loading} mobile={mounted && mobile} />
          </FadeIn>

          <FadeIn duration={600}>
            <NewsResults
              response={response}
              loading={loading}
              error={error}
              mobile={mounted && mobile}
            />
          </FadeIn>

          <FadeIn duration={800}>
            <div className="mt-12 text-textAlternative text-sm space-y-3 break-words">
              <p>
                A RAG system built on top of a custom news aggregation pipeline. Articles are scraped hourly from multiple sources, summarized by an LLM, and stored with vector embeddings for semantic search.
              </p>
              <p>
                <span className="text-text font-semibold">Pipeline:</span>{" "}
                Apache Airflow orchestrates hourly scraping from AP News, CNN, Fox, and Reuters. Each article is processed through Llama 3.1 for summarization, entity extraction (tickers, companies, sectors), and sentiment scoring.
              </p>
              <p>
                <span className="text-text font-semibold">Search:</span>{" "}
                Your question is embedded using nomic-embed-text:v1.5 and compared against article summaries using pgvector similarity search. Relevant articles are retrieved and used to generate a contextual answer with citations.
              </p>
              <p>
                <span className="text-text font-semibold">Stack:</span>{" "}
                PostgreSQL + pgvector, Apache Airflow 3.x, Ollama (Llama 3.1:8b), FastAPI.
              </p>
              <p>
                <span className="text-text font-semibold">Infrastructure:</span>{" "}
                The backend for this setup spans between two different servers in my apartment. The first being a dedicated server, and the second being my personal computer. Due to the outdated GPU installed in the server, modern CUDA cannot run and hence ollama refuses to run models efficiently. So, all LLM summarization/embedding/entity-extraction is offloaded to my personal computer running a Nvidia 2080 Super.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
