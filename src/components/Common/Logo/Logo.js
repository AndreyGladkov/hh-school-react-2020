import React from "react";
import logoRed from './logo-red.svg';
import logoGrey from './logo-grey.svg';
import "./Logo.less";

export default function Logo(props) {
  let logo = "";
  switch (props.color) {
    case "red":
      logo = logoRed;
      break;
    case "grey":
      logo = logoGrey;
      break;
    default:
      logo = logoRed;
  }

  return (
    <a href="#">
      <img className="logo" src={logo} alt="hh.ru" />
    </a>
  );
}
