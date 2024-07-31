import Counters from "./component/counters";
import Navbar from "./component/navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </>
  );
}

export default App;
