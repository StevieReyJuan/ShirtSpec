import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MeasurementReview.css';
import StaticToolbar from '../Navbar/Toolbar/StaticToolbar';
import Content from '../Content';
import Buttons from '../Buttons/Buttons';
import MeasurementsContext from '../../context/MeasurementsContext';
import ShirtspecApiService from '../../services/api-endpoint-service';
import MeasurementTable from '../MeasurementTable/MeasurementTable';

class MeasurementReview extends Component {
    static defaultProps = {
        match: { params: {} }
    };

    static contextType = MeasurementsContext;

    componentDidMount() {
        const { customerId } = this.props.match.params;
        this.context.clearError();
        ShirtspecApiService.getCustomerById(customerId)
            .then(this.context.setCustomerDetails)
            .catch(this.context.setError);
    }

    render() {
        const { customer, error } = this.context;

        return (
            <>
                <StaticToolbar />
                <Content className='review-table'>
                    {error ? <p className='error-message'>Customer details cannot be retrieved</p>
                    : <h2>{customer.customer_name}</h2>}
                    <MeasurementTable customer={customer} className='existing-customer'/>
                </Content>
                <Buttons
                    className='measurement-review'
                    tag={Link}
                    to='/customers'
                >
                    Back
                </Buttons>
                <Buttons
                    className='measurement-review'
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