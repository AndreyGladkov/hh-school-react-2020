import React from "react";
import Link from "../../footer/common/social/link/link";
import "./navigation.less";


export default function Navigation(props) {
    if (!props.linksConfig) {
        return null;
    }

    const navigationList = props.linksConfig.map((linkConfig, index) => {
        return (
            <li className="navigation__item" key={index}>
                <Link url={linkConfig.url} title={linkConfig.title} modifierArr={linkConfig.modifierArr} />
            </li>
        );
    });

    return <ul className="navigation">{navigationList}</ul>;
}