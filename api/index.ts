import { ReturnType, Top10Type } from "@/types";

export const api = {
  fetchNavs: async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/navs`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  },
  fetchTop10: async (): Promise<Top10Type> => {
    const res = await fetch(`${process.env.BACKEND_URL}/top_10`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  },
  fetchReturn: async (simbol: string): Promise<ReturnType> => {
    const res = await fetch(`${process.env.BACKEND_URL}/return_${simbol}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  },
  placeTrade: async (simbol: string): Promise<ReturnType> => {
    const res = await fetch(
      `https://dummy-backend-rttuh5f3wq-uc.a.run.app/place_trade/${simbol}`,
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  },
};
