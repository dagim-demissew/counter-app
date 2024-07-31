import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 12 },
    { id: 3, value: 12 },
    { id: 4, value: 12 },
  ]);
  const handleIncrement = (counter) => {
    // Find the index of the counter object with the matching id
    const index = counters.findIndex(c => c.id === counter.id);
  
    // Check if the object was found
    if (index !== -1) {
      // Create a new array with the updated counter
      const newList = counters.map((c, i) => 
        i === index ? { ...c, value: c.value + 1 } : c
      );
  
      // Update the state with the new array
      setCounters(newList);
    }
  };
  const handelDelete = (counterId) => {
    console.log(counterId);
    const newList = counters.filter((i) => i.id !== counterId);
    setCounters(newList);
  };
  const handleReset = () => {
    const newList = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(newList);
    console.log(counters);
  };
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={handelDelete}
          onIncrement={handleIncrement}
        />
      ))}
    </div>
  );
};

export default Counters;
