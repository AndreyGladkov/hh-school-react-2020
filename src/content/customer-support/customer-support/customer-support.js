import React, { Component } from "react";
import { LayoutColumn } from "../../../structure/layout/layout";
import { GlobalContext } from "../../../GlobalContext";
import "./customer-support.less";

export default function Customersupport(props) {
    if (!props.customerSupportData) return;

    const customerSupportData = props.customerSupportData;

    return (
        <GlobalContext.Consumer>
            {({ imagesPath }) => (
                <LayoutColumn sColumnQnt={"2"} mColumnQnt={"2"} lColumnQnt={"4"}>
                    <div className="customer-support__image-container">
                        <img className="customer-support__image" src={`${imagesPath}${customerSupportData.image}`} alt={customerSupportData.description} />
                        <div>
                            {customerSupportData.description}
                        </div>
                    </div>
                </LayoutColumn>
            )}
        </GlobalContext.Consumer>
    );
}