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
<<<<<<< HEAD
                id: '001',
=======
                num: '001',
>>>>>>> 5c54e475b4302bad150259b251ab2af6b438d105
                name: 'Steven',
                date: '01/01/2020'
            },
            {
<<<<<<< HEAD
                id: '002',
=======
                num: '002',
>>>>>>> 5c54e475b4302bad150259b251ab2af6b438d105
                name: 'Gary',
                date: '01/02/2020'
            },
            {
<<<<<<< HEAD
                id: '003',
=======
                num: '003',
>>>>>>> 5c54e475b4302bad150259b251ab2af6b438d105
                name: 'Gus',
                date: '01/03/2020'
            }
        ]

        const custTable = testTable.map((c, i) => {
            return (
                <tr key={i}>
<<<<<<< HEAD
                    <td><Link to={`/customers/${c.id}`}>{c.id}</Link></td>
=======
                    <td><Link to={`/customers/${c.name.toLowerCase()}`}>{c.num}</Link></td>
>>>>>>> 5c54e475b4302bad150259b251ab2af6b438d105
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
<<<<<<< HEAD
                    <Buttons
                        className="customer-table"
                        tag={Link}
                        to='/add-customer'   
                    >
                        Add Customer
                    </Buttons>
=======
>>>>>>> 5c54e475b4302bad150259b251ab2af6b438d105
                </Content>
            </>
        );
    }
}

export default CustomerTable;