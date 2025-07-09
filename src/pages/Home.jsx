import React, { useState } from "react";
// import Home from "./Home";
import Move from "../componets/Move";
import TodoList from "../componets/TodoList";

const Home = () => {
  //   const [step, setStep] = useState(0);
  // const userStep = () => {
  //   const usernum = prompt("숫자를 몇칸식 증감시킬지 입력해주세요.");
  //   setStep(Number(usernum));
  // };
  return (
    <div>
      Home
      <Move />
      <TodoList />
    </div>
  );
};

export default Home;
