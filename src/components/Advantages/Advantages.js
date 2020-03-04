import React from "react";
import "./Advantages.less";
import { ColumnsWrapper, Row, Column } from './../Common/Grid/Grid';
import returnIcon from './return-icon.svg'; 
import deliveryIcon from './delivery-icon.svg';
import serviceIcon from './service-icon.svg';

function Point(props) {
    return (
        <Column quantityColumnsS="2"
            quantityColumnsM="2"
            quantityColumnsL="4">
            <div className="how-we-work__item">
                <img className="how-we-work-icon" src={props.img} alt={props.text} />
                <div className="how-we-work__text">{props.text}</div>
            </div>
        </Column >
    );
}

export default function Advantages(props) {

    const pointsData = [
        {
            img: deliveryIcon,
            text: "Быстрая доставка по всей России"
        },
        {
            img: returnIcon,
            text: "100% гарантия возврат и подлинность товара"
        },
        {
            img: serviceIcon,
            text: "Круглосуточная служба поддержки"
        }
    ];

    const points = pointsData.map((item, index) => <Point img={item.img} text={item.text} key={index}/>)

    return (
        <section className="how-we-work">
            <ColumnsWrapper>
                <Row>
                    {points}
                </Row>
            </ColumnsWrapper>
        </section>
    );
}