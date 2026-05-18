"use client";

import { useEffect, useState } from "react";

type Options = {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  enabled?: boolean;
};

export function useTypewriter({
  text,
  speedMs = 110,
  startDelayMs = 0,
  enabled = true,
}: Options) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const startId = setTimeout(() => {
      setTyped("");
      setDone(false);
      intervalId = setInterval(() => {
        i += 1;
        setTyped(text.slice(0, i));
        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setDone(true);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speedMs, startDelayMs, enabled]);

  return { typed, done };
}
