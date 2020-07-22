import React from 'react';
import './Buttons.css'

function Buttons(props) {

    const { tag, children, className, ...otherProps} = props;

    return React.createElement(
        tag,
        {
            ...otherProps, className: ['btn', className].join(' ')
        },
        children
    )
}

export default Buttons;