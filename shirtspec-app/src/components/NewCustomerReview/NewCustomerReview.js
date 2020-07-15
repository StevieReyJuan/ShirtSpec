import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewCustomerReview.css';
import Navbar from '../Nav/Navbar';
import Content from '../Content';
import Buttons from '../Buttons/Buttons'
import MeasurementsContext from '../../context/MeasurementsContext'
import ShirtspecApiService from '../../services/api-endpoint-service'

class NewCustomerReview extends Component {
    // static defaultProps = {
    //     match: { params: {} }
    // }

    static contextType = MeasurementsContext

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
                <Content className="review-table">
                    <table>
                        <thead>
                            <tr>
                                <td>Chest</td>
                                <td>Shirt Waist</td>
                                <td>Yoke</td>
                                <td>Shaping</td>
                                <td>Left Sleeve</td>
                                <td>Right Sleeve</td>
                                <td>Left Cuff</td>
                                <td>Right Cuff</td>
                                <td>Tail</td>
                                <td>Collar</td>
                                <td>Shoulder Line</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span id="chest">{customer.chest}</span>
                                </td>
                                <td>
                                    <span id="shirt-waist">{customer.shirt_waist}</span>
                                </td>
                                <td>
                                    <span id="yoke">{customer.yoke}</span>
                                </td>
                                <td>
                                    <span id="shaping">{customer.shaping}</span>
                                </td>
                                <td>
                                    <span id="left-sleeve">{customer.left_sleeve}</span>
                                </td>
                                <td>
                                    <span id="right-sleeve">{customer.right_sleeve}</span>
                                </td>
                                <td>
                                    <span id="left-cuff">{customer.left_cuff}</span>
                                </td>
                                <td>
                                    <span id="right-cuff">{customer.right_cuff}</span>
                                </td>
                                <td>
                                    <span id="tail">{customer.tail}</span>
                                </td>
                                <td>
                                    <span id="collar">{customer.collar}</span>
                                </td>
                                <td>
                                    <span id="shoulder-line">{customer.shoulder_line}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Content>
                <Buttons
                    className="MeasurementReview"
                    tag={Link}
                    to='/customers'
                    //onClick={POST}
                >
                    Discard
                </Buttons>
                <Buttons
                    className="MeasurementReview"
                    tag={Link}
                    to='/customers'
                    // onClick={PATCH}
                >
                    Save
                </Buttons>
            </>
        );
    }
}

export default NewCustomerReview;