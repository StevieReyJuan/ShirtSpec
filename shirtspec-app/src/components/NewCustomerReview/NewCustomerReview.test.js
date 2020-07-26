import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NewCustomerReview from './NewCustomerReview';

describe('New Customer Review component', () => {
    it('renders without crashing', () => {

        const div = document.createElement('div');
        
        ReactDOM.render(
        <BrowserRouter>
            <NewCustomerReview />
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
