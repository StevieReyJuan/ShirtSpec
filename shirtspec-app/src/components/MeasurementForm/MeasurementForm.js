import React, { Component } from 'react'
import './MeasurementForm.css'
import MeasurementsContext from '../../context/MeasurementsContext'
import VALUES from '../../shirt-resources/measurement-values'

class MeasurementForm extends Component {
    static contextType = MeasurementsContext

    handleChange = e => {
        const { target: { name, value } } = e
        const updatedCustomerMeasurement = {[name]: value}
        this.context.updateMeasurement(updatedCustomerMeasurement)
    }

    render() {
        const { measurementId, ...props } = this.props
        const measurementValue = VALUES.find(v => 
            v.id === measurementId
        )
        const formattedName = (measurementValue.id).replace(/-/g, "_")

        return (
            <form
                className={['MeasurementForm', measurementId].join(' ')}
                action='#'
                {...props}
            >
                <div className="measurement-container form-section">
                    <label htmlFor="measurement-value"></label>
                    {measurementId === 'customer-name' 
                        ? 
                            <input onChange={this.handleChange} type='text' name="customer_name" defaultValue={this.context.customer.customer_name} required /> 
                        :
                            <select onChange={this.handleChange} name={formattedName}>
                                {measurementValue.values.map(opt => 
                                    <option value={opt} key={opt}>{opt}</option>
                                )}
                            </select>}
                </div>
            </form>
          )
    }

}

export default MeasurementForm;