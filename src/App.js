import React from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions/actions";
import Navbar from "./content/navbar/navbar";
import Header from "./content/header/header";
import Slider from "./content/Sliders/Sliders";
import ProductCard from "./content/product/product";
import Customersupport from "./content/customer-support/customer-support";
import Footer from "./content/footer/footer";
import Loading from "./structure/loading/loading"

class App extends React.Component {
    componentDidMount() {
        this.props.getDataFromServer("http://localhost:9200/api/goods");
    }

    render() {
        if (this.props.appStatus === "ready") {
            return (
                <React.Fragment>
                    <Navbar area={this.props.dataFromServer.area} />
                    <Header userLoggedIn={this.props.dataFromServer} />
                    <Slider slidesConfig={this.props.dataFromServer.slides} />
                    <ProductCard productDataArr={this.props.dataFromServer.goods} />
                    <Customersupport />
                    <Footer statisticsData={this.props.dataFromServer.statisticsData} />
                </React.Fragment>
            );
        } else if (this.props.appStatus === "not ready") {
            return < Loading />;
        }
    }
}

const mapStateToProps = state => ({
    dataFromServer: state.dataFromServer,
    appStatus: state.appStatus
});

const mapDispatchToProps = dispatch => ({
    getDataFromServer: apiLink => dispatch(fetchData(apiLink))

});
export default connect(mapStateToProps, mapDispatchToProps)(App);