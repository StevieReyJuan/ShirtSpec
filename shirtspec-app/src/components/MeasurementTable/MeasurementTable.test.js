import React from 'react';
import ReactDOM from 'react-dom';
import MeasurementTable from './MeasurementTable';

describe('Measurment Table component', () => {
    it('renders without crashing', () => {
        const customer = {
            chest: '',
            shirt_waist: '',
            yoke: '',
            shaping: '',
            left_sleeve: '',
            right_sleeve: '',
            left_cuff: '',
            right_cuff: '',
            tail: '',
            collar: '',
            shoulder_line: ''
        }

        const div = document.createElement('div');
        ReactDOM.render(<MeasurementTable customer={customer} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
