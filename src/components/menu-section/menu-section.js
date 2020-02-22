import React from "react";
import InfoLink from "./link";
import City from "./city";

import {mainCity} from "../variables";
import {menuLinks} from "../variables";

export default function(props) {
    return (
        <section className="menu-section">
            <div className="columns-wrapper">
                <div className="menu-content">
                    <City name={mainCity}/>
                    <div className="menu-content__info">
                        <ul className="info">
                        {menuLinks.map((el) => <InfoLink key={el.name} name={el.name} url={el.url}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>        
    );
}
