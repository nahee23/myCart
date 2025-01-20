import React from "react";
import "./QuantityInput.css";

const QuantityInput = () => {
  return (
    <>
      <button className="quantity_input_button" disabled>
        {" "}
        -{" "}
      </button>
      <p className="quantity_input_count">1</p>
      <button className="quantity_input_button"> + </button>
      {/* 부모태그 는 한개만 <div> or <> ??*/}
    </>
  );
};

export default QuantityInput;
