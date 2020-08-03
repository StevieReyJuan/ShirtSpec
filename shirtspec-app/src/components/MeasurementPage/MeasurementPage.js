import React, { Component } from 'react';
import Content from '../Content';
import INSTRUCTIONS from '../../shirt-resources/measurement-instructions';
import './MeasurementPage.css';
import MeasurementForm from '../MeasurementForm/MeasurementForm';
import Buttons from '../Buttons/Buttons';
import ResponsiveNavbar from '../Navbar/ResponsiveNavbar';

class MeasurementPage extends Component {

    static defaultProps = {
        match: {
            params: {
                measurementId: 'customer-name'}
        }
    };

    render() {

        const measurementStep = INSTRUCTIONS.find(i => 
            i.id === this.props.match.params.measurementId
        );

        const currentPage = INSTRUCTIONS.indexOf(measurementStep);

        return (
            <>
                <ResponsiveNavbar />
                <Content className='measurement-page'>
                    <section>
                        <header>
                            <h1>{measurementStep.name}</h1>
                            <img className='measurement-page demo-pic' src={measurementStep.image} alt='Measurement demonstration' />
                            <p className='measurement-page instructions'>{measurementStep.content}</p>
                        </header>
                    </section>
                    <section>
                        <MeasurementForm measurementId={measurementStep.id}/>
                        {currentPage === 0 ? <></>
                            :   <Buttons
                                    className='measurement-page'
                                    tag={'button'}
                                    onClick={() => this.props.history.push(`/measurement-page/${INSTRUCTIONS[currentPage - 1].id}`)}
                                >
                                    Back
                                </Buttons>
                        
                        }
                        {currentPage === 11 ?
                            <Buttons
                                className='measurement-page'
                                tag={'button'}
                                onClick={() => this.props.history.push('/review-submit')}
                            >
                                Review
                            </Buttons>
                        :   <Buttons
                                className='measurement-page'
                                tag={'button'}
                                onClick={() => this.props.history.push(`/measurement-page/${INSTRUCTIONS[currentPage + 1].id}`)}
                            >
                                Next
                            </Buttons>
                        }
                    </section>
                </Content>
            </>
        );
    }
}

export default MeasurementPage;