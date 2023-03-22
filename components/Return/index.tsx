"use client";

import { ReturnType } from "@/types";

import Badge from "../Badge";

interface Props {
  top10: ReturnType[];
}

const ReturnComponent = ({ top10 }: Props): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <h1 className="mr-4 font-light">Returns</h1>
      <div className="flex justify-center gap-4">
        {top10.map((item) => (
          <Badge key={item.item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ReturnComponent;
