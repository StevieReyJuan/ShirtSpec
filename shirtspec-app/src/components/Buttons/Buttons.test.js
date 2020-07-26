import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';

describe('Buttons component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Buttons tag='button' />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});