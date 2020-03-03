import React from "react";

import "./Button.less";

export default props => {

  const button = props.button || null;

  return (
    <button
      className={button.className}
      onClick={props.clickHandler || null}
      disabled={button.disabled || null}
    >
      {button.title}
    </button>
  )
}