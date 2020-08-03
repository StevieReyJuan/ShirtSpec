import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomersContext from '../../context/CustomersContext';
import ShirtspecApiService from '../../services/api-endpoint-service';
import { format } from 'date-fns';

export default class CustomerListItem extends Component {
    
    static contextType = CustomersContext;

    componentDidMount() {
        this.context.clearError();
        ShirtspecApiService.getCustomersForTable()
            .then(this.context.setCustomersList)
            .catch(this.context.setError);
    }

    renderCustomers() {
        const { customerList = [] } = this.context;
        return customerList.map(customer => 
            <tr key={customer.id}>
                <td data-label='customer id'><Link to={`/customers/${customer.id}`}>{customer.id}</Link></td>
                <td data-label='name'>{customer.customer_name}</td>
                <td data-label='date modified'>{format(customer.date_modified, 'Do MMM YYYY')}</td>
            </tr>
        );
    }
    render() {
        
        return (
            <tbody>
                {this.renderCustomers()}
            </tbody>
        );
    }
}