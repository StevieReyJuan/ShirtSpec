import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CustomersContext from '../../context/CustomersContext'
import ShirtspecApiService from '../../services/api-endpoint-service'

export default class CustomerListItem extends Component {
    static contextType = CustomersContext

    componentDidMount() {
        this.context.clearError()
        ShirtspecApiService.getCustomersForTable()
            // .then(res => console.log(res))
            .then(this.context.setCustomersList)
            .catch(this.context.setError)
    }

    renderCustomers() {
        const { customerList = [] } = this.context
        console.log(customerList)
        return customerList.map(customer => 
            <tr key={customer.id}>
                <td><Link to={`/customers/${customer.id}`}>{customer.id}</Link></td>
                <td>{customer.customer_name}</td>
                <td>{customer.date_modified}</td>
            </tr>
        )
    }
    render() {
        const { error } = this.context;
        
        return (
            <tbody>
                {error
                    ? <p>Error! Debug</p>
                    : this.renderCustomers()
                }
            </tbody>
        )
    }
}