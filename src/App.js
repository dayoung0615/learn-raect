import Card from "./componets/Card";
import Greeting from "./componets/Greeting";

function App() {
  return (
    <div className="wrap">
      <Greeting />
      hello world
      <div className="wrap_card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
