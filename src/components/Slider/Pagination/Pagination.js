import React from "react";
import "./Pagination.less";

/* Пагинация слайдера 
Принимает: 
- dotsQnt           | number |           (требуемое количество "точек" пагинации)
- activeDotIndex    | number |           (id/номер активного слайда)
- onClickHandler    | function |         (обработчик клика по "точке" пагинации)
*/
export default function Pagination(props) {
  if (!props.dotsQnt) return;

  const dotsQnt = props.dotsQnt;
  const activeDotIndex = props.activeDotIndex || 0;
  const onClickHandler = props.onClickHandler;

  let dots = []; //array of jsx
  for (let i = 0; i < dotsQnt; i++) {
    const className =
      activeDotIndex === i
        ? "pagination__dot pagination__dot_active"
        : "pagination__dot";

    dots.push(
      <div
        className={className}
        key={i}
        onClick={() => onClickHandler(i)}
      ></div>
    );
  }

  return (
    <div className="slider__pagination">
      <div className="pagination">{dots}</div>
    </div>
  );
}
