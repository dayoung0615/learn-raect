import { React, useState } from "react";

const Conuter = () => {
  //   let count = 0;
  const [conuState, SetConutState] = useState(0);
  const handleLincrtase = () => {
    SetConutState((conuState += 1));
  };
  const handleLDecrtase = () => {
    SetConutState((conuState -= 1));
  };
  return (
    <div>
      <h1>Conuter</h1>
      <div style={{ fontSize: "36px" }}> {conuState} </div>
      <div>
        <button type="button" onClick={handleLincrtase}>
          +1
        </button>
        <button type="button" onClick={handleLDecrtase}>
          -1
        </button>
      </div>
    </div>
  );
};
export default Conuter;
