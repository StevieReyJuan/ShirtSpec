import React from 'react';
import ReactDOM from 'react-dom';
import CustomerListItem from './CustomerListItem';

describe('Customer List component', () => {
    it('renders without crashing', () => {
        const table = document.createElement('table');
        ReactDOM.render(<CustomerListItem />, table);
        ReactDOM.unmountComponentAtNode(table);
    });
});