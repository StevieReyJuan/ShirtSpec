import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {

    state = {
        hide: true
    }

    render() {
        return (
            <div className='sideBar'>
                <button
                    className='burger' 
                    onClick={ () => this.setState({hide: !this.state.hide}) }
                >
                    (X)
                </button>
                <ul className={`sideBar ${this.state.hide ? 'hide' : ''}`}>
                    <Link to='/measurement-page/name'><li>Name</li></Link>
                    <Link to='/measurement-page/chest'><li>Chest</li></Link>
                    <Link to='/measurement-page/shirt-waist'><li>Shirt Waist</li></Link>
                    <Link to='/measurement-page/yoke'><li>Yoke</li></Link>
                    <Link to='/measurement-page/shaping'><li>Shaping</li></Link>
                    <Link to='/measurement-page/sleeves'><li>Sleeves</li></Link>
                    <Link to='/measurement-page/cuffs'><li>Cuffs</li></Link>
                    <Link to='/measurement-page/tail'><li>Tail</li></Link>
                    <Link to='/measurement-page/collar'><li>Collar</li></Link>
                    <Link to='/measurement-page/shoulder-line'><li>Shoulder Line</li></Link>
                </ul>
            </div>
        )
    }
}

export default Sidebar;