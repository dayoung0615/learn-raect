import Card from "./componets/Card";
import Greeting from "./componets/Greeting";
import Conuter from "./componets/Conuter";

function App() {
  return (
    <div className="wrap">
      <Greeting />
      <Conuter />
      {/* hello world
      <div className="wrap_card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </div>
  );
}

export default App;
