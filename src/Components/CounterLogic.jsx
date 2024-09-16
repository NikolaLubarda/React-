import React from "react";
import { useState } from "react";

const Counter = ({ count, setCount }) => {
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div>
      {" "}
      <button onClick={handleIncrement}>+</button>
      <button>{count}</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
