import { RequestInit } from "next/dist/server/web/spec-extension/request";

export async function getApiResponse(
  id: String,
  message: String
): Promise<any> {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    id,
    message,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "http://127.0.0.1:8001/response",
    requestOptions
  );

  const data = await response.json();
  return data;
}
