import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import MessageList from "./MessageList";
// import GroupChat from "./GroupChat";


class App extends React.Component {
      
  constructor() {
    super()
   
  }
  
  render() {
    return (
      <div className="app">
        <MessageList />
        {/* <Msg></Msg> */}
       {/* <GroupChat></GroupChat> */}
        {/* <SendMessageForm /> */}
     </div>
    )
  }
}
export default App;