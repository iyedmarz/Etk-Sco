"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count != 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex ">
      <button
        className="minus text-3xl border-2 solid w-[50px] h-[50px] flex justify-center items-center"
        onClick={decrement}
      >
        -
      </button>
      <div className="count text-2xl border-0 w-[50px] h-[50px] flex justify-center items-center">
        {count}
      </div>
      <button
        className="plus text-3xl border-2 solid w-[50px] h-[50px] flex justify-center items-center bg-[#9c699b] text-[#ffffff] "
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
