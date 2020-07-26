import React, { Component } from 'react';
import Content from '../Content';
import StaticToolbar from '../Navbar/Toolbar/StaticToolbar';
import Buttons from '../Buttons/Buttons';
import MeasurementsContext from '../../context/MeasurementsContext';
import './CustomerTable.css';
import CustomerListItem from '../CustomerListItem/CustomerListItem';

class CustomerTable extends Component {

    static contextType = MeasurementsContext

    render() {

        const { error } = this.context
        
        return (
            <>
                <StaticToolbar />
                <Content className='customer-table'>
                    {error && <p className='error-message'>No customers!</p>}
                    <table className='customer-table'>
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Name</th>
                                <th>Date Modified</th>
                            </tr>
                        </thead>
                        <CustomerListItem />
                    </table>
                </Content>
                <Buttons
                    className='customer-table'
                    tag={'button'}
                    onClick={() => this.props.history.push('/')}
                >
                    Back
                </Buttons>
                <Buttons
                    className='customer-table'
                    tag={'button'}
                    onClick={() => { this.context.clearCustomerDetails();
                                    this.props.history.push('/measurement-page/customer-name')} }
                >
                    Add Customer
                </Buttons>
            </>
        );
    }
}

export default CustomerTable;