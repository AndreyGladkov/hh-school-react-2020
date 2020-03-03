import React from "react";

import "./logoLink.less";

export default props => {

  return (
    <a href={props.href} className="logo-link">
      <img className="logo" src={props.src} alt={props.alt} />
    </a>
  );
}