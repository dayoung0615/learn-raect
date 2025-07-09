import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Move = () => {
  const history = useNavigate();
  const pageClick = () => {
    history("./Contact");
  };
  return (
    <div>
      {/* <button type="button"></button>
      <button type="button"></button>
      <button type="button"></button> */}
      <Link to={"/Home"}> Home</Link>
      <Link to={"/About"}> About</Link>
      <button type="button" onClick={pageClick}>
        Conuter
      </button>
    </div>
  );
};

export default Move;
