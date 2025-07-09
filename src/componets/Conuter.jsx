import { React, useState } from "react";

const Conuter = ({ step }) => {
  //   let count = 0;
  let [conuState, SetConutState] = useState(0);
  const handleLincrtase = () => {
    SetConutState((conuState += step));
  };
  const handleLDecrtase = () => {
    // SetConutState((conuState -= 1));
    SetConutState((prev) => prev - step);
  };

  const person = {
    name: "김다영",
    mbti: "intp",
  };
  const { mbti, name } = person;
  console.log("🚀 ~ handleLDecrtase ~ mbti:", mbti);
  console.log("🚀 ~ handleLDecrtase ~ name:", name);

  const animals = ["개", "고양이", "앵무새"];

  //   const userStep = () => {
  //     const usernum = prompt("숫자를 몇칸식 증감시킬지 입력해주세요.");

  //   };
  return (
    <div>
      <h1>Conuter</h1>
      <div style={{ fontSize: "36px" }}> {conuState} </div>
      <div>
        <button type="button" onClick={handleLincrtase}>
          + {step}
        </button>
        <button type="button" onClick={handleLDecrtase}>
          - {step}
        </button>
      </div>
    </div>
  );
};
export default Conuter;
