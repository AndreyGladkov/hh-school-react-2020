import React from "react";
import "./layout.less";

export function LayoutWrapper(props) {
    return <div className="columns-wrapper">{props.children}</div>;
}

export function LayoutRow(props) {
    return <div className="columns-row">{props.children}</div>;
}

export function LayoutColumn(props) {
    const sColumnQnt = props.sColumnQnt || "1";
    const mColumnQnt = props.mColumnQnt || "2";
    const lColumnQnt = props.lColumnQnt || "4";
    const flexOrder = props.flexOrder || "default";

    let columnClass = `column column_s-${sColumnQnt} column_m-${mColumnQnt} column_l-${lColumnQnt}`;
    if (flexOrder == "reverse") {
        columnClass += " column_reverse";
    }
    return <div className={columnClass}>{props.children}</div>;
}