import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './NewCustomerReview.css';
import Navbar from '../Nav/Navbar';
import Content from '../Content';
import Buttons from '../Buttons/Buttons'
import MeasurementsContext from '../../context/MeasurementsContext'
import ShirtspecApiService from '../../services/api-endpoint-service'
import MeasurementTable from '../MeasurementTable/MeasurementTable'

class NewCustomerReview extends Component {
    // static defaultProps = {
    //     match: { params: {} }
    // }

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

        const links = [
            {
                'title': 'test1',
                'link': '/test1'
            },
            {
                'title': 'test2',
                'link': '/test2' 
            }
        ]

        return (
            <>
                <Navbar links={links}/>
                {/* <Content className="review-table"> */}
                    <h2>{customer.customer_name}</h2>
                    <MeasurementTable customer={customer} className='new-customer' />
                {/* </Content> */}
                <Buttons
                    className="MeasurementReview"
                    tag={'button'}
                    onClick={() => {
                        this.props.history.goBack()
                    }}
                >
                    Back
                </Buttons>
                <Buttons
                    className="MeasurementReview"
                    tag={'button'}
                    onClick={() => {
                        this.context.clearCustomerDetails();
                        this.props.history.push('/customers')
                    }}
                >
                    Discard
                </Buttons>
                <Buttons
                    className="MeasurementReview"
                    tag={'button'}
                    onClick={() => {
                        this.saveCustomer(customer);
                    }}
                >
                    Save
                </Buttons>
                {this.context.error ? <p>Uh oh! Something went wrong! Make sure you've filled all measurements.</p> : <></>}
            </>
        );
    }
}

export default NewCustomerReview;