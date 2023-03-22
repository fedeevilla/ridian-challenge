import { useRef, useEffect } from "react";

import { PlaceType } from "@/types";
interface Props {
  places: PlaceType[];
}
const PlaceTradeList = ({ places }: Props) => {
  const ref = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [places]);

  return (
    <>
      <table className="text-sm text-left text-gray-500 bg-white border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900" scope="col">
              Symbol
            </th>
            <th className="px-6 py-4 font-medium text-gray-900" scope="col">
              Price
            </th>
            <th className="px-6 py-4 font-medium text-gray-900" scope="col">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-100 divide-y divide-gray-100">
          {places.map(({ symbol, price, date }, index) => {
            return (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">{symbol}</td>
                <td className="px-6 py-4">$ {price?.toFixed(2)}</td>
                <td className="px-6 py-4">{date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div ref={ref} />
      {places.length === 0 && (
        <h4 className="mt-2 text-center font-extralight">No items found</h4>
      )}
    </>
  );
};

export default PlaceTradeList;
