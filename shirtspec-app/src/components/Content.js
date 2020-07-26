import React from 'react';
import './Content.css';

export default function Content({ className, ...otherProps }) {
    return (
        <div className={['content', className].join(' ')} {...otherProps} />
    )
}
