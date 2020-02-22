import React from "react";
import Service from "./service";

import {servicesItems} from "../variables";

export default function(props) {
    return (
        <section className="services-section">
            <div className="columns-wrapper">
                <div className="columns-row">
                    <div className="services-content">
                        {servicesItems.map((el) => <Service key={el.name} name={el.name} src={el.src}/>)}
                    </div>
                </div>
            </div>
        </section>      
    );
}