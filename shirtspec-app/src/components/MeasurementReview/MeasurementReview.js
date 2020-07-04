import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MeasurementReview.css';
import Navbar from '../Nav/Navbar';
import Content from '../Content';
import Buttons from '../Buttons/Buttons'

class MeasurementReview extends Component {
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
                                <td>Sleeves</td>
                                <td>Cuffs</td>
                                <td>Tail</td>
                                <td>Collar</td>
                                <td>Shoulder Line</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span id="chest">0</span>
                                </td>
                                <td>
                                    <span id="shirt-waist">0</span>
                                </td>
                                <td>
                                    <span id="yoke">0</span>
                                </td>
                                <td>
                                    <span id="shaping">0</span>
                                </td>
                                <td>
                                    <span id="sleeves">0</span>
                                </td>
                                <td>
                                    <span id="cuffs">0</span>
                                </td>
                                <td>
                                    <span id="tail">0</span>
                                </td>
                                <td>
                                    <span id="collar">0</span>
                                </td>
                                <td>
                                    <span id="shoulder-line">0</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Content>
                <Buttons
                    className="MeasurementReview"
                    tag={Link}
                    to='/customers'
                >
                    Back
                </Buttons>
                <Buttons
                    className="MeasurementReview"
                    tag={Link}
                    to='/measurement-page/chest'
                >
                    Edit
                </Buttons>
            </>
        );
    }
}

export default MeasurementReview;