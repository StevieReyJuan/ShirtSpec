import React from 'react'
import './Content.css'

export default function Content({ className, ...otherProps }) {
    return (
        <div className={['Content', className].join(' ')} {...otherProps} />
    );
}
