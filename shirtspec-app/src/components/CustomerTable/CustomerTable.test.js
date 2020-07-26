import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import CustomerTable from './CustomerTable';

describe('Customer Table component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <CustomerTable />
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});