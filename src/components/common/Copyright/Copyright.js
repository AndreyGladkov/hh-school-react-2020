import React from "react";
import "./Copyright.less";

/* Компонент Copyright*/
export default function Copyright() {
  return (
    <div className="copyright">
      &copy;
      <span className="copyright__year"> {new Date().getFullYear()} </span>
      Группа компаний HeadHunter
    </div>
  );
}
