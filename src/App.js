import React, { Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Advantages from './components/Advantages/Advantages';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import PopularProducts from './components/PopularProducts/PopularProducts';
import { getPopularProducts } from "./actions";

import "./less/fonts.less";
import "./less/global.less";

const mapStateToProps = state => ({
  popularProducts: state.popularProducts,
});

const mapDispatchToProps = dispatch => ({
  getPopularProductsFromServer: link => dispatch(getPopularProducts(link))
});

class App extends React.Component {
 
  componentDidMount() {
    this.props.getPopularProductsFromServer('http://localhost:9200/api/feelinglucky');
  }

  render() {
    return (
      <Fragment>
        <Navbar city={"Москва"} />
        <Header />
        <Slider />
        <PopularProducts data={this.props.popularProducts}/>
        <Advantages />
        <Footer />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);