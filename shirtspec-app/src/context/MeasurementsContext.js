import React, { Component } from 'react'

const MeasurementsContext = React.createContext({
    customer: {},
    error: null,
    setError: () => {},
    clearError: () => {},
    setCustomerDetails: () => {},
    clearCustomerDetails: () => {},
    updateMeasurement: () => {}
})

export default MeasurementsContext

export class MeasurementsProvider extends Component {
    state = {
        customer: {},
        error: null
    }

    setCustomerDetails = customer => {
        if (!customer) {
            customer = {}
        }

        this.setState({ customer })
    }

    setError = error => {
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }
    
    clearCustomerDetails = () => {
        this.setCustomerDetails({
            customer_name: ''
        })
    }

    updateMeasurement = measurement => {
        const updatedCustomer = {...this.state.customer, ...measurement}
        this.setCustomerDetails(updatedCustomer)
    }

    render() {
        const value = {
            customer: this.state.customer,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setCustomerDetails: this.setCustomerDetails,
            clearCustomerDetails: this.setCustomerDetails,
            updateMeasurement: this.updateMeasurement
        }
        return (
            <MeasurementsContext.Provider value={value}>
                {this.props.children}
            </MeasurementsContext.Provider>
        )
    }
}