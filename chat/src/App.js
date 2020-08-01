import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import MessageList from "./MessageList";
import Menu from "./Menu";
// import GroupChat from "./GroupChat";


class App extends React.Component {
      
  constructor() {
    super()
   
  }
  
  render() {
    return (
      <div className="app">
        <Menu />
        <MessageList />
        
     </div>
    )
  }
}
export default App;