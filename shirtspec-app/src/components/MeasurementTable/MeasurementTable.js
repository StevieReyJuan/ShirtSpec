import React from 'react';
import './MeasurementTable.css';

    function MeasurementTable({ customer, className }) {
        return (
            <table className={['responsive-table', className].join(' ')}>
                <thead>
                    <tr>
                        <th>Chest</th>
                        <th>Shirt Waist</th>
                        <th>Yoke</th>
                        <th>Shaping</th>
                        <th>Left Sleeve</th>
                        <th>Right Sleeve</th>
                        <th>Left Cuff</th>
                        <th>Right Cuff</th>
                        <th>Tail</th>
                        <th>Collar</th>
                        <th>Shoulder Line</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label='chest' id='chest'>{customer.chest || ''}</td>
                        <td data-label='shirt waist' id='shirt-waist'>{customer.shirt_waist || ''}</td>
                        <td data-label='yoke' id='yoke'>{customer.yoke || ''}</td>
                        <td data-label='shaping' id='shaping'>{customer.shaping || ''}</td>
                        <td data-label='left sleeve' id='left-sleeve'>{customer.left_sleeve || ''}</td>
                        <td data-label='right sleeve' id='right-sleeve'>{customer.right_sleeve || ''}</td>
                        <td data-label='left cuff' id='left-cuff'>{customer.left_cuff || ''}</td>
                        <td data-label='right cuff' id='right-cuff'>{customer.right_cuff || ''}</td>
                        <td data-label='tail' id='tail'>{customer.tail || ''}</td>
                        <td data-label='collar' id='collar'>{customer.collar || ''}</td>
                        <td data-label='shoulder line' id='shoulder-line'>{customer.shoulder_line || ''}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

export default MeasurementTable;