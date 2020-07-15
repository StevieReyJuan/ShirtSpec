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
        // console.log(this.context.customer)
    }

    render() {
        const { measurementId, ...props } = this.props
        const measurementValue = VALUES.find(v => 
            v.id === measurementId
        )
        
        return (
            <form
                className={['MeasurementForm', measurementId].join(' ')}
                action='#'
                {...props}
            >
                <div className="measurement-container form-section">
                    <label htmlFor="measurement-value"></label>
                    {measurementId === 'name' ? 
                        <input onChange={this.handleChange} type='text' name="customer_name" defaultValue={this.context.customer.customer_name} required /> :
                        <select 
                            onChange={this.handleChange}
                            defaultValue={measurementValue.values[0]} 
                            name={(measurementValue.id).replace(/-/g, "_")}
                        >
                            {measurementValue.values.map(opt => 
                                <option value={opt} key={opt}>{opt}</option>
                            )}
                        </select>}
                    {/* <select defaultValue={measurementValue.values[0]}>
                        {measurementValue.values.map(opt => 
                            <option value={opt} key={opt.toString()}>{opt.toString()}</option>
                        )}
                    </select> */}
                </div>
            </form>
          )
    }

}

export default MeasurementForm;