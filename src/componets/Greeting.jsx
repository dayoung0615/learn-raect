import { React } from "react";
import Button from "./Button";

function Greeting({ userName }) {
  //로직
  //   let username = userName;
  const textClass = "text_red";

  const HandleCilck = (data) => {
    console.log("data :", data);
    // if (data === "naver") {
    //   window.open("https://www.naver.com/");
    // } else {
    //   window.open("https://www.google.com/?hl=ko");
    // }

    //삼항연산자 조건식 ? tru 경우 실행코드 : fal일 결루 실행코드
    window.open(
      data === "naver"
        ? "https://www.naver.com/"
        : "https://www.google.com/?hl=ko"
    );
  };

  return (
    // 빈태그 가능/
    <div style={{ border: "1px solid blue" }}>
      {/* <h1 className="componets_title"> 안녕하세요 {userName}님!</h1> */}
      <h1 className={`greeting_title ${textClass}`}>
        안녕하세요 {userName}님!
      </h1>
      <p> 오늘하루도 시원한 하루되세요!</p>
      <Button
        link={"https://www.naver.com/"}
        text="네이버 바로가기"
        category={"naver"}
        onClick={HandleCilck}
      />
      <Button
        link={"https://www.google.com/?hl=ko"}
        text="구글 바로가기"
        category={"google"}
        onClick={HandleCilck}
      />
    </div>
  );
}

export default Greeting;
