"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleRefresh);
    window.addEventListener("load", handleRefresh);

    // Initial refresh after render
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleRefresh);
      window.removeEventListener("load", handleRefresh);
    };
  }, []);

  return <>{children}</>;
}
