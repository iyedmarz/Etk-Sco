"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity } from "@/_redux/cartSlice";
import { AppDispatch } from "@/app/_redux/store";

const Counter = ({ barcode }: { barcode: string }) => {
  const [count, setCount] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  console.log(barcode);

  const fetchData = async (barcode: string) => {
    try {
      console.log("here");
      const response = await fetch(`http://localhost:5000/product/${barcode}`); //
      const responseData = await response.json();
      console.log(responseData);
      dispatch(addToCart(responseData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const increment = async () => {
    await fetchData(barcode);
    console.log("increment -->");
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    console.log("decrement  <--");
    if (count != 0) {
      setCount((prevCount) => prevCount - 1);
    }
    dispatch(decrementQuantity(barcode));
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="minus mx-1 text-3xl border-2 solid w-[50px] h-[50px] flex justify-center items-center"
        onClick={decrement}
      >
        -
      </button>
      <div className="count mx-1 text-2xl border-0 w-[50px] h-[50px] flex justify-center items-center">
        {count}
      </div>
      <button
        className="plus mx-1 text-3xl border-2 solid w-[50px] h-[50px] flex justify-center items-center bg-[#9c699b] text-[#ffffff] "
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
