import React, {Fragment} from 'react';
import Header from '../components/header';
import Slider from '../components/slider';
import Content from '../components/content';
import Advantages from '../components/advantages';

const ShowroomPage = (props) => {
    return (
        <Fragment>
            <Header />
            <Slider />
            <Content productsData={props.dataFromServer} />
            <Advantages />
        </Fragment>
    )
}
export default ShowroomPage;
