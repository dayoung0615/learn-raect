import Card from "./componets/Card";
import Greeting from "./componets/Greeting";
import Conuter from "./componets/Conuter";
import React, { useState, useEffect } from "react";

function App() {
  // const [step, setStep] = useState(0);
  // const userStep = () => {
  //   const usernum = prompt("숫자를 몇칸식 증감시킬지 입력해주세요.");
  //   setStep(Number(usernum));
  // };
  // let userInName;
  const [userName, setUserName] = Greeting("");
  useEffect(() => {
    const InName = prompt("이름을 적어주세요.");
    setUserName(InName);
  }, []);

  return (
    <div className="wrap">
      <Greeting userName={userName} />
      {/* <Conuter step={step} />
      <button type="button" onClick={userStep}>
        간격선택
      </button> */}
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
