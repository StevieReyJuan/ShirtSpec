import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from '../Content'
import Navbar from '../Nav/Navbar'
import Buttons from '../Buttons/Buttons'
import MeasurementsContext from '../../context/MeasurementsContext'
// import CustomersContext from '../../context/CustomersContext'
// import ShirtspecApiService from '../../services/api-endpoint-service'
import './CustomerTable.css'
import CustomerListItem from '../CustomerListItem/CustomerListItem'

class CustomerTable extends Component {
    static contextType = MeasurementsContext

    // componentDidMount() {
    //     this.context.clearError()
    //     ShirtspecApiService.getCustomersForTable()
    //         // .then(res => console.log(res))
    //         .then(this.context.setCustomersList)
    //         .catch(this.context.setError)
    // }

    // renderCustomers() {
    //     const { customerList = [] } = this.context
    //     console.log(customerList)
    //     return customerList.map(customer => 
    //         <CustomerListItem 
    //             key={customer.id}
    //             customer={customer}
    //         />
    //     )
    // }

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
                        {error ? <p>Error! Debug!</p> :
                        <CustomerListItem />}
                    </table>
                    <Buttons
                        className="customer-table"
                        tag={'button'}
                        // to='/'
                        onClick={() => this.props.history.push('/')}
                    >
                        Back
                    </Buttons>
                    <Buttons
                        className="customer-table"
                        tag={'button'}
                        // to='/measurement-page/name'
                        onClick={() => { this.context.clearCustomerDetails();
                                        this.props.history.push('/measurement-page/name')} }
                    >
                        Add Customer
                    </Buttons>
                </Content>
            </>
        );
    }
}

export default CustomerTable;