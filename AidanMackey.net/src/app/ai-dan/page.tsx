"use client";

import React, { useEffect, useRef, useState } from "react";
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
    message: `
Hello! I am Ai-Dan, an LLM trained on personal statements 
from the real Aidan Mackey. I'm here to answer any questions 
you may have!
    
Please be patient with me, I am quite dumb as I am running a small fine-tuned model off an old GTX 980Ti :D
`,
  },
];

export default function AiDan() {
  const inputId: string = "userInput";

  const [id] = useState<string>(uuidv4);
  const [conversation, setConversation] =
    useState<ConversationItem[]>(starterConversation);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function submit() {
    const input: string | undefined = inputRef.current?.value;

    if (input === undefined) {
      return;
    }

    getResponse(input);

    inputRef.current = null;
  }

  async function getResponse(message: String) {
    const userAddition: ConversationItem = {
      from: Member.USER,
      message,
    };

    setConversation((prev) => [...prev, userAddition]);

    setIsLoading(true);
    const response = (await getApiResponse(id, message))["response"];

    const aiDanAddition: ConversationItem = {
      from: Member.AI_DAN,
      message: response,
    };

    setConversation((prev) => [...prev, aiDanAddition]);
    setIsLoading(false);
  }

  useEffect(() => {
    const input = inputRef.current;

    if (!input) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        submit();
      }
    };

    input.addEventListener("keydown", handleKeyDown);

    return () => {
      input.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-background`}>
      <Overlay>
        <NavBar />
      </Overlay>
      <main className="pt-10 h-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1>Ai-Dan</h1>
          <ul>
            {conversation.map((item: ConversationItem, index: number) => (
              <li key={index}>
                <h2 className="text-textAlternative">{item.from}</h2>
                <p className="whitespace-pre-wrap">{item.message}</p>
              </li>
            ))}
            {isLoading ? (
              <li>
                <h2 className="text-textAlternative">{Member.AI_DAN}</h2>
                <p>Uhhh...</p>
              </li>
            ) : (
              <></>
            )}
          </ul>
          <div className="flex w-full my-10 px-5">
            <textarea
              ref={inputRef}
              className="resize-none w-full bg-foreground rounded-l-2xl text-text px-5 py-2 outline-none border-none"
            />
            <button
              id="chatSubmitButton"
              onClick={submit}
              className="w-full max-w-[10%] min-w-max rounded-r-2xl bg-foreground hover:bg-background"
            >
              {"[Submit]"}
            </button>
          </div>
        </div>
      </main>
      <footer>
        <TwoPartFooter />
        <RibbonFooter />
      </footer>
    </div>
  );
}
