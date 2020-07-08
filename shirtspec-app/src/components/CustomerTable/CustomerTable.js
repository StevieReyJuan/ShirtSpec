import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from '../Content'
import Navbar from '../Nav/Navbar'
import Buttons from '../Buttons/Buttons'
import './CustomerTable.css'

class CustomerTable extends Component {

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

        const testTable = [
            {
                id: '001',
                name: 'Steven',
                date: '01/01/2020'
            },
            {
                id: '002',
                name: 'Gary',
                date: '01/02/2020'
            },
            {
                id: '003',
                name: 'Gus',
                date: '01/03/2020'
            }
        ]

        const custTable = testTable.map((c, i) => {
            return (
                <tr key={i}>
                    <td><Link to={`/customers/${c.id}`}>{c.id}</Link></td>
                    <td>{c.name}</td>
                    <td>{c.date}</td>
                </tr>
            )
        })
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
                        <tbody>
                            {custTable}
                        </tbody>
                    </table>
                    <Buttons
                        className="customer-table"
                        tag={Link}
                        to='/'
                    >
                        Back
                    </Buttons>
                    <Buttons
                        className="customer-table"
                        tag={Link}
                        to='/measurement-page/name'   
                    >
                        Add Customer
                    </Buttons>
                </Content>
            </>
        );
    }
}

export default CustomerTable;