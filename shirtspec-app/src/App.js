import React, {Component } from 'react';
import PrivateRoute from './PrivateRoute';
// TODO: import PublicRoute from './PublicRoute';
import { Route, Switch } from 'react-router-dom';
import MeasurementPage from './components/MeasurementPage/MeasurementPage';
import CustomerTable from './components/CustomerTable/CustomerTable';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import MeasurementReview from './components/MeasurementReview/MeasurementReview';
import SignUpPage from './components/SignUpPage/SignUpPage';
import NewCustomerReview from './components/NewCustomerReview/NewCustomerReview';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

class App extends Component {

    state = { hasError: false };

    static getDerivedStateFromError(error) {
      return { hasError: true };
    };

    render() {
        return (
            <div className='App'>
                <main>
                    {this.state.hasError && <p className='error-message'>Something went really wrong!</p>}
                    <Switch>
                        <Route exact path='/' component={LandingPage} />
                        {/* <PublicRoute path={'/register'} component={SignUpPage} /> */}
                        <Route path='/register' component={SignUpPage} />
                        <PrivateRoute path={'/measurement-page/:measurementId'} component={MeasurementPage} />
                        <PrivateRoute path={'/customers/:customerId'} component={MeasurementReview} />
                        <PrivateRoute path={'/review-submit'} component={NewCustomerReview} />
                        <PrivateRoute path={'/customers'} component={CustomerTable} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;