import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

import "./less/fonts.less";
import "./less/global.less";

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Fragment>
        <Navbar city={"Москва"} />
        <Header prop={"1"} />
      </Fragment>
    );
  }
}
