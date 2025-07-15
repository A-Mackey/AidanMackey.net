"use client";

import React, { useEffect, useState } from "react";
import Overlay from "@/components/overlay";
import NavBar from "@/components/navbar";
import TwoPartFooter from "@/components/twoPartFooter";
import RibbonFooter from "@/components/ribbonFooter";
import { getApiResponse } from "./ai-dan-api";
import { v4 as uuidv4 } from "uuid";

export enum Member {
  AI_DAN = "Ai-Dan",
  USER = "You",
}

export interface ConversationItem {
  from: Member;
  message: String;
  invisible?: boolean;
}

export const starterConversation: ConversationItem[] = [
  {
    from: Member.AI_DAN,
    message:
      "Hello! I am Ai-Dan, an LLM trained on personal statements from the real Aidan Mackey. I'm here to answer any questions you may have!",
  },
];

export default function Home() {
  const inputId: string = "userInput";

  const [id] = useState<string>(uuidv4);
  const [conversation, setConversation] =
    useState<ConversationItem[]>(starterConversation);

  function submit() {
    const input = document.getElementById(inputId)?.value;

    getResponse(input);
  }

  async function getResponse(message: String) {
    const trackingConversation: ConversationItem[] = conversation;
    const userAddition = {
      from: Member.USER,
      message: message,
    };
    setConversation([...conversation, userAddition]);
    trackingConversation.push(userAddition);
    const response = (await getApiResponse(id, message))["response"];
    const aiDanAddition = {
      from: Member.AI_DAN,
      message: response,
    };
    setConversation([...trackingConversation, aiDanAddition]);
  }

  return (
    <div className={`min-h-screen bg-background`}>
      <Overlay>
        <NavBar />
      </Overlay>
      <main className="pt-10 h-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Here</h1>
        <input type="text" id={inputId} />
        <button onClick={submit}>CLICK</button>
        <ul>
          {conversation.map((item: ConversationItem, index: number) => (
            <div key={index}>
              <h1>{item.from}</h1>
              <p>{item.message}</p>
            </div>
          ))}
        </ul>
      </main>
      <footer>
        <TwoPartFooter />
        <RibbonFooter />
      </footer>
    </div>
  );
}
