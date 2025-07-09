import { React } from "react";

function Greeting() {
  //로직
  let username = "김다영";
  const textClass = "text_red";

  return (
    // 빈태그 가능/
    <>
      <h1 className="componets_title"> 안녕하세요 {username}님!</h1>
      {/* <h1 className={"greeting_title ${textClass}"}>
        안녕하세요 {username}님!
      </h1> */}
      <p> 오늘하루도 시원한 하루되세요!</p>
    </>
  );
}

export default Greeting;
