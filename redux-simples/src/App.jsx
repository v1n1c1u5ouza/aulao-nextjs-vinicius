import logo from "./logo.svg";
import "./App.css";

import Interval from "./components/Interval";
import Average from "./components/Average";
import Sum from "./components/Sum";
import Raffle from "./components/Raffle";

function App() {
  return (
    <div className="App">
      <h1>Exercios React-Redux (Simples)</h1>
      <div className="linha">
        <Interval></Interval>
      </div>
      <div className="linha">
        <Average></Average>
        <Sum></Sum>
        <Raffle></Raffle>
      </div>
    </div>
  );
}

export default App;
