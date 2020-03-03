import React from "react";
import './components/common/global.less';
import Header from './components/Header/Header';
import TopSection from './components/TopSection/TopSection';
import CarouselSection from './components/CarouselSection/CarouselSection';
import ContentSection from './components/ContentSection/ContentSection';


export default class App extends React.Component {

  render() {
    
    return (
      <React.Fragment>
        <TopSection />
        <Header />
        <CarouselSection />
        <ContentSection/>
      </React.Fragment>
    )
  }


}
