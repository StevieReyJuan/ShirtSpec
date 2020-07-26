import React, { Component } from 'react';
import './NewCustomerReview.css';
import StaticToolbar from '../Navbar/Toolbar/StaticToolbar';
import Content from '../Content';
import Buttons from '../Buttons/Buttons';
import MeasurementsContext from '../../context/MeasurementsContext';
import ShirtspecApiService from '../../services/api-endpoint-service';
import MeasurementTable from '../MeasurementTable/MeasurementTable';

class NewCustomerReview extends Component {

    static defaultProps = {
        match: { params: {} }
    }

    static contextType = MeasurementsContext

    saveCustomer = customer => {
        if (typeof customer.id === 'undefined') {
            ShirtspecApiService.postCustomer(customer)
                .then(newCustomer => {
                    this.props.history.push(`/customers/${newCustomer.id}`)
                    this.context.clearCustomerDetails()
                })
                .catch(this.context.setError)
        }   else {
                    ShirtspecApiService.updateCustomer(customer.id, customer)
                        .then(customer => {
                        this.props.history.push(`/customers/${customer.id}`)
                        this.context.clearCustomerDetails()
                        })
                        .catch(this.context.setError)
                }
    }     

    render() {
        const { customer } = this.context

        return (
            <>
                <StaticToolbar />
                <Content className='review-table'>
                    <h2>{customer.customer_name}</h2>
                    <MeasurementTable customer={customer} className='new-customer' />
                </Content>
                <Buttons
                    className='measurement-review'
                    tag={'button'}
                    onClick={() => {
                        this.props.history.goBack()
                    }}
                >
                    Back
                </Buttons>
                <Buttons
                    className='measurement-review'
                    tag={'button'}
                    onClick={() => {
                        this.context.clearCustomerDetails();
                        this.props.history.push('/customers')
                    }}
                >
                    Discard
                </Buttons>
                <Buttons
                    className='measurement-review'
                    tag={'button'}
                    onClick={() => {
                        this.saveCustomer(customer);
                    }}
                >
                    Save
                </Buttons>
                {this.context.error && <p className='error-message'>Uh oh! Something went wrong! Make sure you've filled all measurements.</p>}
            </>
        );
    }
}

export default NewCustomerReview;