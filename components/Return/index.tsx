"use client";

import { ReturnType } from "@/types";

import Badge from "../Badge";

interface Props {
  top10: ReturnType[];
}

const ReturnComponent = ({ top10 }: Props): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-4 p-4 overflow-y-auto">
      {top10.map((item) => (
        <Badge key={item.symbol} item={item} />
      ))}
    </div>
  );
};

export default ReturnComponent;
