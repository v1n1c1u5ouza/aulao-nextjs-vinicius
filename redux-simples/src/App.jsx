import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Exercios React-Redux (Simples)</h1>
      <div className="linha">
        <Card title="Card 1" red>X</Card>
        <Card title="Card 2" green>X</Card>
      </div>
      <div className="linha">
        <Card title="Card 3" blue>Y</Card>
        <Card title="Card 4" purble>Y</Card>
      </div>
    </div>
  );
}

export default App;
