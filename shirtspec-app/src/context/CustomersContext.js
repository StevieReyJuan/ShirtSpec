import React, { Component } from 'react';

const CustomersContext = React.createContext({
    customerList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setCustomersList: () => {},
    clearCustomersList: () => {}
});

export default CustomersContext;

export class CustomersProvider extends Component {

    state = {
        customerList: [],
        error: null
    };

    setCustomersList = customerList => {
        this.setState({ customerList });
    }

    setError = error => {
        this.setState({ error });
    }

    clearError = () => {
        this.setState({ error: null });
    }

    clearCustomersList = () => {
        this.setState( { customerList: [] });
    }

    render() {
        const value = {
            customerList: this.state.customerList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setCustomersList: this.setCustomersList,
            clearCustomersList: this.clearCustomersList
        };

        return (
            <CustomersContext.Provider value={value}>
                {this.props.children}
            </CustomersContext.Provider>
        );
    }
}