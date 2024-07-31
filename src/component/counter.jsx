import React from "react";
import { useState } from "react";

const Counter = (props) => {
    console.log(props.counter.value)
  return (
    <div>
      <span
        className={
          props.counter.value === 0 ? "badge m-2 badge-warning" : "badge m-2 badge-primary"
        }>
        { props.counter.value === 0 ? "Zero" :  props.counter.value}
      </span>
      <button onClick={()=>props.onIncrement(props.counter)} className="btn btn-secondary btn-sm">
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2">
        {" "}
        Delete
      </button>
    </div>
  );
};

export default Counter;
