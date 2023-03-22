export type ReturnType = {
  symbol: string;
  return: number;
};

export type Top10Type = {
  top_10: string[];
};

export type NavsType = {
  daily_navs: Record<string, string>[];
  hourly_navs: Record<string, string>[];
};

export type PlaceType = {
  symbol: string;
  price: number;
  date: string;
};
