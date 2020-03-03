import React from "react";
import "./layout.less";

export const Wrapper = props => <div className="columns-wrapper">{props.children}</div>;

export const Row = props => <div className="columns-row">{props.children}</div>;

export const Columns = props => {
  
  const columnS = props.columnS,
        columnM = props.columnM,
        columnL = props.columnL;

  return <div className={`column column_s-${columnS} column_m-${columnM} column_l-${columnL}`}>{props.children}</div>;
}