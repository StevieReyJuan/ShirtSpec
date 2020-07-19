import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { CustomersProvider } from './context/CustomersContext'
import App from './App';
import './index.css';
import { MeasurementsProvider } from './context/MeasurementsContext';

ReactDOM.render(
    <BrowserRouter>
        <CustomersProvider>
            <MeasurementsProvider>
                <App />
            </MeasurementsProvider>
        </CustomersProvider>
    </BrowserRouter>, 
    document.getElementById('root'));