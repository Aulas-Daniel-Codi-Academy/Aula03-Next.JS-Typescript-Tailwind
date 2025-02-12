"use client";

import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Erro");
    }
  };

  const clear = () => setInput("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-72">
        <div className="mb-4 p-2 text-right bg-gray-700 rounded text-xl min-h-[50px]">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((char) => (
            <button
              key={char}
              className="bg-gray-600 p-4 rounded hover:bg-gray-500"
              onClick={() => (char === "=" ? calculate() : handleClick(char))}
            >
              {char}
            </button>
          ))}
          <button
            className="col-span-2 bg-red-500 p-4 rounded hover:bg-red-400"
            onClick={clear}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
