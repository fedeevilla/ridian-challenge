"use client";

import React, { useState } from "react";

import { api } from "@/api";

import Button from "../Button";

const PlaceTradeComponent = (): JSX.Element => {
  const [text, setText] = useState<string>("BTC");
  const [sumbitting, setSubmitting] = useState<boolean>(false);
  const [places, setPlaces] = useState<any[]>([]);

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      setSubmitting(true);
      const res = await api.placeTrade(text);

      setPlaces((prev) => [...prev, { ...res, simbol: text }]);
      setText("");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <form className="flex justify-center gap-4 m-4" onSubmit={handleSubmit}>
        <div>
          <input
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter a Simbol"
            type="text"
            value={text}
            onChange={(ev) => setText(ev.target.value)}
          />
        </div>
        <Button
          disabled={sumbitting || text.length === 0}
          label="Trade"
          sumbitting={sumbitting}
          type="submit"
        />
      </form>
      <table className="text-sm text-left text-gray-500 bg-white border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900" scope="col">
              Simbol
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
          {places.map((place, index) => {
            return (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">{place.simbol}</td>
                <td className="px-6 py-4">$ {place.price.toFixed(2)}</td>
                <td className="px-6 py-4">{place.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlaceTradeComponent;
