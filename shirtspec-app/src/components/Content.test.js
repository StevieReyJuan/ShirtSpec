import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';

describe('Sign Up Page component', () => {
    it('renders without crashing', () => {
        
        const div = document.createElement('div');
        ReactDOM.render(<Content />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
