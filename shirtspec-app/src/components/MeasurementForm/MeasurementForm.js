import React, { Component } from 'react'
import './MeasurementForm.css'
import VALUES from '../../shirt-resources/measurement-values'

class MeasurementForm extends Component {
    state = {
        pageNum: 1
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
                    <select defaultValue={measurementValue.values[0]}>
                        {measurementValue.values.map(opt => 
                            <option value={opt} key={opt.toString()}>{opt.toString()}</option>
                        )}
                    </select>
                </div>
            </form>
          )
    }

}

export default MeasurementForm;