import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {

    state = {
        hide: true
    }

    render() {
        return (
            <div className='sidebar'>
                <button
                    className='burger' 
                    onClick={ () => this.setState({hide: !this.state.hide}) }
                >
                    (X)
                </button>
                <ul className={`sidebar ${this.state.hide ? 'hide' : ''}`}>
                    <Link to='/measurement-page/customer-name'><li>Name</li></Link>
                    <Link to='/measurement-page/chest'><li>Chest</li></Link>
                    <Link to='/measurement-page/shirt-waist'><li>Shirt Waist</li></Link>
                    <Link to='/measurement-page/yoke'><li>Yoke</li></Link>
                    <Link to='/measurement-page/shaping'><li>Shaping</li></Link>
                    <Link to='/measurement-page/left-sleeve'><li>Left Sleeve</li></Link>
                    <Link to='/measurement-page/right-sleeve'><li>Right Sleeve</li></Link>
                    <Link to='/measurement-page/left-cuff'><li>Left Cuff</li></Link>
                    <Link to='/measurement-page/right-cuff'><li>Right Cuff</li></Link>
                    <Link to='/measurement-page/tail'><li>Tail</li></Link>
                    <Link to='/measurement-page/collar'><li>Collar</li></Link>
                    <Link to='/measurement-page/shoulder-line'><li>Shoulder Line</li></Link>
                    <Link to='/review-submit'><li>Review/Submit</li></Link>
                </ul>
            </div>
        )
    }
}

export default Sidebar;