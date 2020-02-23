import React from "react";

import MenuSection from "./menu-section/menu-section";
import HeaderSection from "./header-section/header-section";
import SliderSection from "./slider-section/slider-section";
import CatalogSection from "./catalog-section/catalog-section";
import ServicesSection from "./services-section/services-section";
import FooterSection from "./footer-section/footer-section";
import PopupSection from "./popup-section";

export default function(props) {
    return (
        <React.Fragment>
            <MenuSection/>
            <HeaderSection/>
            <SliderSection/>
            <CatalogSection/>
            <ServicesSection/>
            <FooterSection/>
            <PopupSection/>
        </React.Fragment>
    );
}