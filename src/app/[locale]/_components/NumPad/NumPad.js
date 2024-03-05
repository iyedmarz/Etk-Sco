import React, { useState } from "react";
import "./NumPad.css";

const Numpad = ({ placeholder }) => {
  const [number, setNumber] = useState("");

  const buttons = [
    { value: "1", className: "col-start-1 col-end-2 row-start-1 row-end-2" },
    { value: "2", className: "col-start-2 col-end-3 row-start-1 row-end-2" },
    { value: "3", className: "col-start-3 col-end-4 row-start-1 row-end-2" },
    { value: "4", className: "col-start-1 col-end-2 row-start-2 row-end-3" },
    { value: "5", className: "col-start-2 col-end-3 row-start-2 row-end-3" },
    { value: "6", className: "col-start-3 col-end-4 row-start-2 row-end-3" },
    { value: "7", className: "col-start-1 col-end-2 row-start-3 row-end-4" },
    { value: "8", className: "col-start-2 col-end-3 row-start-3 row-end-4" },
    { value: "9", className: "col-start-3 col-end-4 row-start-3 row-end-4" },
    // { value: "C", className: "col-start-1 col-end-2 row-start-4 row-end-5" },
    { value: "0", className: "col-start-2 col-end-3 row-start-4 row-end-5" },
    // { value: "del", className: "col-start-3 col-end-4 row-start-4 row-end-5" },
  ];

  const handleButtonClick = (value) => {
    if (value === "C") {
      setNumber("");
    }
    if (value === "del") {
      setNumber(substring(0, number.length - 1));
    } else {
      setNumber(number + value);
    }
  };

  return (
    <div className="numpadcontainer">
      <input
        type="text"
        value={number}
        onChange={(e) => {
          e.target.value;
        }}
        placeholder={placeholder}
        className="numInput"
      />
      <div className="numpad">
        {buttons.map((button) => (
          <button
            key={button.value}
            className={button.className}
            onClick={() => handleButtonClick(button.value)}
          >
            {button.value}
          </button>
        ))}
        <button
          key="C"
          className="col-start-1 col-end-2 row-start-4 row-end-5"
          onClick={() => setNumber("")}
        >
          C
        </button>
        <button
          key="Del"
          className="col-start-3 col-end-4 row-start-4 row-end-5"
          onClick={() => setNumber(number.substring(0, number.length - 1))}
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default Numpad;
