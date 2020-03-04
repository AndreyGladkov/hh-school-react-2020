import React from "react";
import './Grid.less';

export function ColumnsWrapper(props) {
  return <div className="columns-wrapper">{props.children}</div>;
}

export function Row(props) {
  return <div className="columns-row">{props.children}</div>;
}

export function Column(props) {
  const quantityColumnsS = props.quantityColumnsS || "1";
  const quantityColumnsM = props.quantityColumnsM || "2";
  const quantityColumnsL = props.quantityColumnsL || "4";
  
  let columnClass = `column column_s-${quantityColumnsS} column_m-${quantityColumnsM} column_l-${quantityColumnsL} ${(props.beFirst) ? "be-first" : ""}`;
  
  return <div className={columnClass}>{props.children}</div>;
}
