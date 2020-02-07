import React from "react";
import Loader from "./components/common/Loader/Loader";
import Fail from "./components/common/Fail/Fail";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
const axios = require("axios");

export default class App extends React.Component {
  state = {
    dataFromServer: [], //данные, полученные с сервера
    appStatus: "not ready" // not ready, ready, fail
  };

  componentDidMount() {
    //Получить данные с сервера
    if (this.state.appStatus === "not ready") {
      axios
        .get("http://localhost:9200/api/feelinglucy")
        .then(response => {
          /* Имитация долгой загрузки с сервера (показать лоадер) */
          return new Promise((resolve, reject) => {
            setTimeout(() => resolve(response), 2000);
          });
        })
        .then(data => {
          /* Данные получены, приложение готов */
          this.setState({ dataFromServer: data, appStatus: "ready" });
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
        </React.Fragment>
      );
    } else if (this.state.appStatus === "not ready") {
      return <Loader />;
    } else if (this.state.appStatus === "fail") {
      return <Fail />;
    }
  }
}
