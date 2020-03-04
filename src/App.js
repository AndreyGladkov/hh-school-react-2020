import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Advantages from './components/Advantages/Advantages';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import PopularProducts from './components/PopularProducts/PopularProducts';
import OrderForm from './components/OrderForm/OrderForm';

import "./less/fonts.less";
import "./less/global.less";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      popularProducts: []
    }
    
  }

  componentDidMount() {
    fetch('http://localhost:9200/api/feelinglucky')
      .then(response => response.json())
      .then(data => {
       this.setState({
         popularProducts: data
       })
      })
      .catch(err => console.log(err));
  }

  

  render() {
    return (
      <Fragment>
        <Navbar city={"Москва"} />
        <Header />
        <Slider />
        <PopularProducts data={this.state.popularProducts}/>
        <Advantages />
        <Footer />
      </Fragment>
    );
  }
}
