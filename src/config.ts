const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.aidanmackey.net";

export const config = {
  backendUrl: BACKEND_URL,
  api: {
    news: `${BACKEND_URL}/news`,
    newsSearch: `${BACKEND_URL}/news/search`,
  },
  ws: {
    mnist: (BACKEND_URL.replace(/^http/, "ws")) + "/ws",
  },
};
