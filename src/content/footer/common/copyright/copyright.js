import React from "react";
import "./copyright.less";

export default function Copyright() {
    return (
        <div className="copyright">
            &copy;
        <span className="copyright__year"> {new Date().getFullYear()} </span>
            Группа компаний HeadHunter
    </div>
    );
}