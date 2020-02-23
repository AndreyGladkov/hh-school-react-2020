import React from "react";

export default function(props) {
    return (
        <div className="footer-content__stats">
            Сегодня на сайте
            {props.vacancy} вакансий,
            {props.resume} резюме,
            {props.company} компании и за неделю
            {props.invitation} приглашения
        </div>
    );
}