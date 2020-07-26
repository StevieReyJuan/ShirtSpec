import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import MeasurementReview from './MeasurementReview';

describe('Measurment Review component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <MeasurementReview />
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});