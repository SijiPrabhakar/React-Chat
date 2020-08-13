import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./Menu.css";
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import {Link} from 'react-router-dom';
import PopUp from "./PopUp";
import "./PopUp.css";
import App from "./App";
import HelpContent from "./HelpContent";

class Menu extends React.Component {
      
  constructor() {
    super()
    this.state ={
        menuOpen : false,
        seen: false
    }
   
  }
  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };
  openMenu(){
      this.setState({
          menuOpen : true
      })
  }

  closeMenu(){
      this.setState({
          menuOpen : false
      })

  }
  
  render() {
    return (
        
        <div className="menu">
      
        <CheeseburgerMenu
        isOpen={this.state.menuOpen}
        closeCallback={this.closeMenu.bind(this)}>
        {/* <MenuContent closeCallback={this.closeMenu.bind(this)}/> */}
        {/* <div>
        <div className="btn" onClick={this.togglePop}>
        
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div> */}
      <Link to = '/help'> Help !</Link>
      </CheeseburgerMenu>
      
      <HamburgerMenu
        isOpen={this.state.menuOpen}
        menuClicked={this.openMenu.bind(this)}
        width={26}
        height={16}
        strokeWidth={3}
        rotate={0}
        color='purple'
        borderRadius={0}
        animationDuration={0.5}
      />
      <h2 className="header">Hey Buddy...</h2>
     
      
      </div>
    )
  }
}
export default Menu;

