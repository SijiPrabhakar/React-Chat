import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Groupchat from "./Groupchat";
import chat from "./chat";
import MessageList from "./MessageList";
import Msg from "./Msg";
import SendMessageForm from "./SendMessageForm";

class App extends React.Component {
      
  constructor() {
    super()
   
  }
  
  render() {
    return (
      <div className="app">
        <MessageList />
        {/* <Msg></Msg> */}
       
        {/* <SendMessageForm /> */}
     </div>
    )
  }
}
export default App;