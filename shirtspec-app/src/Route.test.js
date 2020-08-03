import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import LandingPage from './components/LandingPage/LandingPage';
import CustomerTable from './components/CustomerTable/CustomerTable';

describe('Public/Private Route components', () => {
    it('renders without crashing', () => {
        
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <PublicRoute path={'/'} component={LandingPage}/>
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders without crashing', () => {
        
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <PrivateRoute path={'/customers'} component={CustomerTable} />
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
