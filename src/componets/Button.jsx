import React from "react";

const Button = ({ link, text, category, onClick }) => {
  const HandleCilck = () => {
    console.log("클릭");
    onClick(text); //클릭이라는 이벤트를 가지고 분기처리되는 값(text)을 얻을 수 있음
  };
  return (
    <button type="button" onClick={HandleCilck}>
      {text}
    </button>
  );
};

export default Button;
