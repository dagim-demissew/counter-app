import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  const { onDelete, onIncrement, onReset, counters, onDecrement } = props;
  return (
    <div>
      <button onClick={() => onReset()} className="btn btn-primary btn-sm m-2">
        reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={() => onDelete(counter.id)}
          onIncrement={() => onIncrement(counter)}
          onDecrement={() => onDecrement(counter)}
        />
      ))}
    </div>
  );
};

export default Counters;
