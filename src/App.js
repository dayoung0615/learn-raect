import { userEffect, useState } from "react";
import Card from "./componets/Card";
import Greeting from "./componets/Greeting";
import Conuter from "./componets/Conuter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// yarn 인설트를 해서 가장 무거운 폴더를 생성하는 용도로 사용됨

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/**
 * 
 *   // const [step, setStep] = useState(0);
  // const userStep = () => {
  //   const usernum = prompt("숫자를 몇칸식 증감시킬지 입력해주세요.");
  //   setStep(Number(usernum));
  // };
  // let userInName;
  // const [userName, setUserName] = userEffect("");
  // userEvent(() => {
  //   //사용자 이름 입력받기
  //   const InName = prompt("이름을 적어주세요.");
  //   setUserName(InName);
  // }, []);
 *       {/* <Greeting
      // userName={userName}
      /> */
/* <Conuter step={step} />
      <button type="button" onClick={userStep}>
        간격선택
      </button> */
/* hello world
      <div className="wrap_card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> 
 */
