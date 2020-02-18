import React from "react";
import Loader from "./components/common/Loader/Loader";
import Fail from "./components/common/Fail/Fail";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Content from "./components/Content/Content";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import OrderForm from "./components/OrderForm/OrderForm";
const axios = require("axios");

export default class App extends React.Component {
  state = {
    dataFromServer: [], //данные, полученные с сервера
    appStatus: "not ready" // not ready, ready, fail,
  };

  componentDidMount() {
    //Получить данные с сервера
    if (this.state.appStatus === "not ready") {
      axios
        .get("http://localhost:9200/api/feelinglucky")
        .then(response => {
          /* Имитация долгой загрузки с сервера (показать лоадер) */
          return new Promise((resolve, reject) => {
            setTimeout(() => resolve(response), 0);
          });
        })
        .then(response => {
          /* Данные получены, приложение готово */
          this.setState({ dataFromServer: response.data, appStatus: "ready" });
        })
        .catch(error => {
          console.log(error);
          this.setState({ appStatus: "fail" });
        });
    }
  }

  render() {
    if (this.state.appStatus === "ready") {
      return (
        <React.Fragment>
          <Navbar />
          <Header />
          <Slider />
          <Content productDataArr={this.state.dataFromServer} />
          <Features />
          <Footer />
        </React.Fragment>
      );
    } else if (this.state.appStatus === "not ready") {
      return <Loader />;
    } else if (this.state.appStatus === "fail") {
      return <Fail />;
    }
  }
}
