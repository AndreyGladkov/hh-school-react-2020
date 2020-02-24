import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import ShowroomPage from './pages/showroom-page';
import PaymentPage from './pages/payment-page';
import DeliveryPage from './pages/delivery-page';
import PickupPage from './pages/pickup-page';
import Contacts from './pages/contacts-page';
import Page404 from './pages/404-page';

import Footer from './components/footer'

export default class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={() => <ShowroomPage dataFromServer={this.props.dataFromServer} /> } />
          <Route path='/payment' exact component={PaymentPage} />
          <Route path='/delivery' exact component={DeliveryPage} />
          <Route path='/pickup' exact component={PickupPage} />
          <Route path='/contacts' exact component={Contacts} />
          <Route path='*' component={Page404} />
        </Switch>
      <Footer />
    </Router>
    )
  }
}
