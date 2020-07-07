import React from 'react';
// import Navbar from './components/Nav/Navbar'
import { Route, Switch } from 'react-router-dom';
import MeasurementPage from './components/MeasurementPage/MeasurementPage'
import CustomerTable from './components/CustomerTable/CustomerTable'
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import MeasurementReview from './components/MeasurementReview/MeasurementReview';
import SignUpPage from './components/SignUpPage/SignUpPage';

function App() {
  return (
    <div className='App'>
      <nav>
      </nav>
      <header>
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/register' component={SignUpPage}></Route>
          <Route path='/measurement-page/:measurementId' component={MeasurementPage} />
          <Route path='/customers/:customerName' component={MeasurementReview} />
          <Route path='/customers' component={CustomerTable} />
        </Switch>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;