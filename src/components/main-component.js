import React from "react";

import MenuSection from "./menu-section/menu-section";
import HeaderSection from "./header-section/header-section";
import ServicesSection from "./services-section/services-section";

export default function(props) {
    return (
        <React.Fragment>
            <MenuSection/>
            <HeaderSection/>
            <ServicesSection/>
        </React.Fragment>
    );
}