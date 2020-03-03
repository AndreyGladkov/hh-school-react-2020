import React from "react";
import "./nav.less";

export default props => {

  const navigation = props.navigation;

  if (!navigation) return null;

  const navigationList = navigation.list.map(navigationItem => {

    return (
      <li
        key={navigationItem.id}
        className={
          navigationItem.itemClass
            ? `nav__item ${navigationItem.itemClass}`
            : "nav__item"
        }
      >
        <a
          href={navigationItem.url}
          className={
            navigationItem.linkClass
              ? `nav__link  ${navigationItem.linkClass}`
              : "nav__link"}
        >
          {navigationItem.title}
        </a>
      </li>
    )
  });

  return <ul className={navigation.navigationClass ? `nav ${navigation.navigationClass}` : "nav"}>{navigationList}</ul>;
}