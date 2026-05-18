export const CHAIN_IMAGES = [
  "/chains/p1.png",
  "/chains/p2.png",
  "/chains/p3.png",
  "/chains/p4.png",
  "/chains/p5.png",
];

export type ChainConfig = {
  id: string;
  direction: "left" | "right";
  duration: number; // seconds per cycle (higher = slower)
};

export const CHAINS: ChainConfig[] = [
  { id: "chain-a", direction: "left", duration: 70 },
  { id: "chain-b", direction: "right", duration: 90 },
  { id: "chain-c", direction: "left", duration: 80 },
];
