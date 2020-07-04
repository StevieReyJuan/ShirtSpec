import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(props) {
    const { links } = props;
    const linkLis = links.map((l, i) => 
        <Link key={i} to={l.link}>
            <li key={i}>{l.title}</li>
        </Link>
        );

    return (
        <div className="nav">
            <div className="logo">
                Navbar
            </div>
            <ul>
                {linkLis}
            </ul>
        </div>
    )
}

export default Navbar;