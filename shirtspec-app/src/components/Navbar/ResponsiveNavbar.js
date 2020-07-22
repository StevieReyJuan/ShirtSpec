import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

class ResponsiveNavbar extends Component {
    state = {
      sideDrawerOpen: false
    }
  
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    }
  
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }
  
    render() {
        // let backdrop; //null, undefined
  
        // if(this.state.sideDrawerOpen) {
        //     backdrop = <Backdrop click={this.backdropClickHandler}/>;
        // }

        return (
            <div className="responsive-navbar">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} close={this.backdropClickHandler}/>
                {/* {backdrop} */}
                {this.state.sideDrawerOpen ? <Backdrop click={this.backdropClickHandler}/> : <></>}
            </div>
        );
    }
  }
  
  export default ResponsiveNavbar;