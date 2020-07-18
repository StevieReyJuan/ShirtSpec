import React, {Component } from 'react';
import PrivateRoute from './PrivateRoute'
// import Navbar from './components/Nav/Navbar'
import { Route, Switch } from 'react-router-dom';
import MeasurementPage from './components/MeasurementPage/MeasurementPage'
import CustomerTable from './components/CustomerTable/CustomerTable'
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import MeasurementReview from './components/MeasurementReview/MeasurementReview';
import SignUpPage from './components/SignUpPage/SignUpPage';
import NewCustomerReview from './components/NewCustomerReview/NewCustomerReview';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <nav>
        </nav>
        <header>
        </header>
        <main>
          {this.state.hasError && <p>ERROR</p>}
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/register' component={SignUpPage} />
            <Route path='/measurement-page/:measurementId' component={MeasurementPage} />
            <Route path='/customers/:customerId' component={MeasurementReview} />
            <Route path='/review-submit' component={NewCustomerReview} />
            <PrivateRoute path='/customers' component={CustomerTable} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
  
        </footer>
      </div>
    );
  }
}

export default App;