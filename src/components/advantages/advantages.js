import React from "react";
import Advantage from "./advantage";

const Advantages = () => {
    return (
        <section className="advantages-section">
            <div className="columns-wrapper">
                <div className="columns-row">
                    <Advantage theme={"advantages-item__icon advantages-item__icon_delivery"} 
                        description={"Быстрая доставка по всей России"} />
                    <Advantage theme={"advantages-item__icon advantages-item__icon_return"} 
                        description={"100% гарантия возврата и подлинность товара"} />
                    <Advantage theme={"advantages-item__icon advantages-item__icon_support"} 
                        description={"Круглосуточная служба поддержки"} /> 
                </div>
            </div>
        </section>
    )
}
export default Advantages;
