import React, { Component } from 'react'
import Content from '../Content'
import INSTRUCTIONS from '../../shirt-resources/measurement-instructions'
import './MeasurementPage.css'
import MeasurementForm from '../MeasurementForm/MeasurementForm'
import Navbar from '../Nav/Navbar'
import Sidebar from '../Nav/Sidebar'
import Buttons from '../Buttons/Buttons'
import { Link } from 'react-router-dom';

class MeasurementPage extends Component {
    render() {
        const links = [
            {
                'title': 'Customers',
                'link': '/customers'
            },
            {
                'title': 'test2',
                'link': '/test2' 
            }
        ]
        const measurementStep = INSTRUCTIONS.find(i => 
            i.id === this.props.match.params.measurementId
        )
        return (
            <>
                <Navbar links={links}/>
                <Sidebar />
                <Content className='MeasurementPage'>
                    <section>
                        <header>
                            <img className="measure-pic" src={measurementStep.image} alt="Measurement demonstration" />
                            <p className="measure-instructions">{measurementStep.content}</p>
                        </header>
                    </section>
                    <section>
                        <MeasurementForm measurementId={measurementStep.id}/>
                        <Buttons
                            className="MeasurementPage"
                            tag={Link}
                            to='/' //use state for page 
                        >
                            Back
                        </Buttons>
                        <Buttons
                            className="MeasurementPage"
                            tag={Link}
                            to='/measurement-page/shirt-waist' //use state for page
                        >
                            Next
                        </Buttons>
                    </section>
                </Content>
            </>
        )
    }
}

export default MeasurementPage;