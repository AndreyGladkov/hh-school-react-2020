import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

export default class App extends React.Component {
  state = {
    dataFromServer: [], //данные, полученные с сервера
    visible: false
  };

  componentDidMount() {
    console.log("App is mounted");
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <Slider />
      </React.Fragment>
    );
  }
}
