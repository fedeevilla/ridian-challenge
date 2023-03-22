import { NavsType, ReturnType, Top10Type } from "@/types";

export const api = {
  fetchNavs: async (): Promise<NavsType> => {
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
  fetchReturn: async (symbol: string): Promise<ReturnType> => {
    const res = await fetch(`${process.env.BACKEND_URL}/return_${symbol}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  },
};
