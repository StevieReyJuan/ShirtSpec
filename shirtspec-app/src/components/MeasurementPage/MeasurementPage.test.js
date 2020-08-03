import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MeasurementPage from './MeasurementPage';

describe('Measurement Page component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <MeasurementPage />
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});