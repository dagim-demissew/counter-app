import React, { useState } from "react";
import Counters from "./component/counters";
import Navbar from "./component/navbar";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 12 },
    { id: 3, value: 12 },
    { id: 4, value: 12 },
  ]);
  const handleIncrement = (counter) => {
    const index = counters.findIndex((c) => c.id === counter.id);
    if (index !== -1) {
      const newList = counters.map((c, i) =>
        i === index ? { ...c, value: c.value + 1 } : c
      );
      setCounters(newList);
    }
  };
  const handleDecrement = (counter) => {
    const index = counters.findIndex((c) => c.id === counter.id);
    if (index !== -1) {
      const newList = counters.map((c, i) =>
        i === index ? { ...c, value: c.value - 1 } : c
      );
      setCounters(newList);
    }

  };
  const handleDelete = (counterId) => {
    console.log(counterId);
    const newList = counters.filter((i) => i.id !== counterId);
    setCounters(newList);
    console.log(newList);
  };
  const handleReset = () => {
    const newList = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(newList);
  };
  return (
    <>
      <Navbar totalCount={counters.filter((i) => i.value > 0).length} />
      <main className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </main>
    </>
  );
}

export default App;
