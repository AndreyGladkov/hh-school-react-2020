import React from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions";
import Loader from "./components/common/Loader/Loader";
import Fail from "./components/common/Fail/Fail";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Content from "./components/Content/Content";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

const mapStateToProps = state => ({
  dataFromServer: state.dataFromServer,
  appStatus: state.appStatus
});

const mapDispatchToProps = dispatch => ({
  getDataFromServer: apiLink => dispatch(fetchData(apiLink))
});

/* Компонент-контейнер App */
class App extends React.Component {
  componentDidMount() {
    //Получить данные с сервера
    this.props.getDataFromServer("http://localhost:9200/api/feelinglucky");
  }

  render() {
    if (this.props.appStatus === "ready") {
      return (
        <React.Fragment>
          <Navbar area={this.props.dataFromServer.area} />
          <Header userLoggedIn={this.props.dataFromServer.user.loggedIn} />
          <Slider slidesConfig={this.props.dataFromServer.slides} />
          <Content productDataArr={this.props.dataFromServer.goods} />
          <Features />
          <Footer statisticsData={this.props.dataFromServer.statisticsData} />
        </React.Fragment>
      );
    } else if (this.props.appStatus === "not ready") {
      return <Loader />;
    } else if (this.props.appStatus === "fail") {
      return <Fail />;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
