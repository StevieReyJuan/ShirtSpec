import React, { Component } from 'react'
import Content from '../Content'
import INSTRUCTIONS from '../../shirt-resources/measurement-instructions'
import './MeasurementPage.css'
import MeasurementForm from '../MeasurementForm/MeasurementForm'
import Navbar from '../Nav/Navbar'
import Sidebar from '../Nav/Sidebar'
import Buttons from '../Buttons/Buttons'
// import { Link } from 'react-router-dom';

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

        const currentPage = INSTRUCTIONS.indexOf(measurementStep)

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
                        {currentPage === 0 ? <></>
                            :   <Buttons
                                    className="MeasurementPage"
                                    tag={'button'}
                                    onClick={() => this.props.history.push(`/measurement-page/${INSTRUCTIONS[currentPage - 1].id}`)}
                                >
                                    Back
                                </Buttons>
                        
                        }
                        {currentPage === 11 ?
                            <Buttons
                                className="MeasurementPage"
                                // tag={Link}
                                // to={'/review-submit'}
                                tag={'button'}
                                onClick={() => this.props.history.push('/review-submit')}
                            >
                                Review
                            </Buttons>
                        :   <Buttons
                                className="MeasurementPage"
                                tag={'button'}
                                onClick={() => this.props.history.push(`/measurement-page/${INSTRUCTIONS[currentPage + 1].id}`)}
                            >
                                Next
                            </Buttons>
                        }
                    </section>
                </Content>
            </>
        )
    }
}

export default MeasurementPage;