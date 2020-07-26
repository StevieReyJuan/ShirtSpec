import React from 'react';
import ReactDOM from 'react-dom';
import MeasurementForm from './MeasurementForm';

describe('Measurement Form component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MeasurementForm measurementId={'chest'}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});