import React, { Component } from "react";
import { LayoutRow, LayoutWrapper } from "../../structure/layout/layout";
import Customersupport from "./customer-support/customer-support";
import "./customer-support/customer-support.less";

export default class CustomerSupport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supports: [
                {
                    description: "Быстрая доставка по всей России",
                    image: "delivery.svg"
                },
                {
                    description: "100% гарантия возврата и подлинность товара",
                    image: "return.svg"
                },
                {
                    description: "Круглосуточная служба поддержки",
                    image: "support.svg"
                }
            ]
        };
    }

    render() {
        const supports = this.state.supports.map((customersupport, index) => {
            return <Customersupport customerSupportData={customersupport} key={index} />;
        });

        return (
            <section className="customer-support">
                <LayoutWrapper>
                    <LayoutRow>{supports}</LayoutRow>
                </LayoutWrapper>
            </section>
        );
    }
}