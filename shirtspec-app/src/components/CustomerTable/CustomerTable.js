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
                num: '001',
                name: 'Steven',
                date: '01/01/2020'
            },
            {
                num: '002',
                name: 'Gary',
                date: '01/02/2020'
            },
            {
                num: '003',
                name: 'Gus',
                date: '01/03/2020'
            }
        ]

        const custTable = testTable.length === 0 ? <></> : testTable.map(c => {
            return (
                <tr>
                    <td><Link to={`/customers/${c.name.toLowerCase()}`}>{c.num}</Link></td>
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
                            {/* <tr>
                                <td>001</td>
                                <td>Steven</td>
                                <td>01/01/2020</td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>Gary</td>
                                <td>01/02/2020</td>
                            </tr>
                            <tr>
                                <td>003</td>
                                <td>Gus</td>
                                <td>01/03/2020</td>
                            </tr> */}
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
                    {/* <Buttons
                        className="customer-table"
                        tag={Link}
                        to='/measurement-page/shirt-waist'
                    >
                        Next
                    </Buttons> */}
                </Content>
            </>
        );
    }
}

export default CustomerTable;