import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'

import MessageList from "./MessageList";
// import GroupChat from "./GroupChat";


class Menu extends React.Component {
      
  constructor() {
    super()
    this.state ={
        menuOpen : false,
    }
   
  }
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
        <div>
        <CheeseburgerMenu
        isOpen={this.state.menuOpen}
        closeCallback={this.closeMenu.bind(this)}>
        {/* <MenuContent closeCallback={this.closeMenu.bind(this)}/> */}
      </CheeseburgerMenu>
      
      <HamburgerMenu
        isOpen={this.state.menuOpen}
        menuClicked={this.openMenu.bind(this)}
        width={32}
        height={24}
        strokeWidth={3}
        rotate={0}
        color='blue'
        borderRadius={0}
        animationDuration={0.5}
      />
      </div>
    )
  }
}
export default Menu;

