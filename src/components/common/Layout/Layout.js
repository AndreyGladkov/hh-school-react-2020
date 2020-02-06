import React from "react";
import "./Layout.less";

/* Контейнер-обёртка. Внутрь помещаем LayoutRow */
export function LayoutWrapper(props) {
  return <div className="columns-wrapper">{props.children}</div>;
}

/* Flex-строка. Внутрь помещаем LayoutColumn */
export function LayoutRow(props) {
  return <div className="columns-row">{props.children}</div>;
}

/* Flex-колонка. Принимает необходимое число колонок для размеров s,m,l */
export function LayoutColumn(props) {
  const sColumnQnt = props.sColumnQnt || "1";
  const mColumnQnt = props.mColumnQnt || "2";
  const lColumnQnt = props.lColomnQnt || "4";

  const columnClass = `column column_s-${sColumnQnt} column_m-${mColumnQnt} column_l-${lColumnQnt}`;

  return <div className={columnClass}>{props.children}</div>;
}
