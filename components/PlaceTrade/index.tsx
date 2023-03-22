"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { PlaceType } from "@/types";

import Button from "../Button";
import PlaceTradeList from "../PlaceTradeList";

import "react-toastify/dist/ReactToastify.css";

const PlaceTradeComponent = (): JSX.Element => {
  const [text, setText] = useState<string>("");
  const [sumbitting, setSubmitting] = useState<boolean>(false);
  const [places, setPlaces] = useState<PlaceType[]>([]);

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      setSubmitting(true);
      const res = await fetch("api/place_trade", {
        method: "POST",
        body: text,
      });

      const result = await res.json();

      setPlaces((prev) => [...prev, { ...result, symbol: text }]);
      setText("");
      toast.success(`Great, you've bought ${text} successfully!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <form className="flex justify-center gap-4 m-4" onSubmit={handleSubmit}>
        <div>
          <input
            autoFocus
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            maxLength={3}
            placeholder="Enter a Symbol"
            type="text"
            value={text}
            onChange={(ev) => setText(ev.target.value.toUpperCase())}
          />
        </div>
        <Button
          disabled={sumbitting || text.length === 0}
          label="Buy"
          sumbitting={sumbitting}
          type="submit"
        />
      </form>
      <PlaceTradeList places={places} />
      <ToastContainer />
    </div>
  );
};

export default PlaceTradeComponent;
