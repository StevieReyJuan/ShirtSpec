import React, { Component } from 'react'
import Content from '../Content'
import Navbar from '../Nav/Navbar'
import Buttons from '../Buttons/Buttons'
import MeasurementsContext from '../../context/MeasurementsContext'
import './CustomerTable.css'
import CustomerListItem from '../CustomerListItem/CustomerListItem'

class CustomerTable extends Component {
    static contextType = MeasurementsContext

    render() {
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

        const { error } = this.context
        return (
            <>
                <Navbar links={links}/>
                <Content className='customer-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer Id</th>
                                <th>Name</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <CustomerListItem />
                    </table>
                    {error && <p>Oops! Can't load customers</p>}
                    <Buttons
                        className="customer-table"
                        tag={'button'}
                        onClick={() => this.props.history.push('/')}
                    >
                        Back
                    </Buttons>
                    <Buttons
                        className="customer-table"
                        tag={'button'}
                        onClick={() => { this.context.clearCustomerDetails();
                                        this.props.history.push('/measurement-page/customer-name')} }
                    >
                        Add Customer
                    </Buttons>
                </Content>
            </>
        );
    }
}

export default CustomerTable;