import React, { Component } from 'react';
import './MeasurementForm.css';
import MeasurementsContext from '../../context/MeasurementsContext';
import VALUES from '../../shirt-resources/measurement-values';

class MeasurementForm extends Component {

    static contextType = MeasurementsContext;

    state = {
        selectedValue: null
    };

    handleChange = e => {
        let { target: { name, value } } = e;
        if (name !== 'shoulder_line' && name !== 'customer_name') {
            value = parseFloat(value);
        }
        const updatedCustomerMeasurement = {[name]: value};
        this.context.updateMeasurement(updatedCustomerMeasurement);
    }

    render() {
        const { measurementId, ...props } = this.props;
        const measurementValue = VALUES.find(v => 
            v.id === measurementId
        );

        // I could (or should...) have just changed the values in the store. Maybe later.
        const formattedName = (measurementValue.id).replace(/-/g, '_');

        let value = this.context.customer[formattedName];

        if (formattedName !== 'shoulder_line' && formattedName !== 'customer_name') {
            value = parseFloat(this.context.customer[formattedName]);
        }

        if (!value) {
            value = '';
        }

        return (
            <form
                className={['measurement-form', measurementId].join(' ')}
                action='#'
                {...props}
            >
                <div className='measurement-container form-section'>
                    <label htmlFor='measurement-value'></label>
                    {measurementId === 'customer-name' 
                        ? 
                            <input onChange={this.handleChange} type='text' name='customer_name' placeholder='Customer Name' defaultValue={this.context.customer.customer_name} required /> 
                        :
                            <select value={value} onChange={this.handleChange} name={formattedName}>
                                    <option value={''}></option>
                                {measurementValue.values.map(opt => 
                                    // The rest of the mapped values here are numbers, with the exception of 'shoulder_line', which is a string.
                                    <option value={formattedName === 'shoulder_line' ? opt : parseFloat(opt)} key={opt}>{opt}</option>
                                )}
                            </select>}
                </div>
            </form>
        );
    }

}

export default MeasurementForm;