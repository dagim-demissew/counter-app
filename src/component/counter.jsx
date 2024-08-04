import { bold } from "fontawesome";
import React from "react";
import { useState } from "react";

const Counter = (props) => {
  return (
    <div className="row">
      <div className="col-1">
        <span
          className={
            props.counter.value === 0
              ? "badge m-2 badge-warning"
              : "badge m-2 badge-primary"
          }>
          {props.counter.value === 0 ? "Zero" : props.counter.value}
        </span>
      </div>
      <div className="col">
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary btn-sm m-1">
        <span style={{ fontWeight: "bold" }}>+</span>
      </button>
      <button
        onClick={() => props.onDecrement(props.counter)}
        className="btn btn-secondary btn-sm m-1"
        disabled={props.counter.value === 0 ? "disabled" : ""}
        >
        <span style={{ fontWeight: "bold" }}>-</span>
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2">
        {" "}
        Delete
      </button>
          </div>
    </div>
  );
};

export default Counter;
