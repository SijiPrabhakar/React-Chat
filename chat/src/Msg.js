import {Component} from "react";
import React from "react";
import "./Msg.css";

class Msg extends React.Component {
  state = {
    text: ""
  }
  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      <div>
      <div class="container">
  <img src="/w3images/bandmember.jpg" alt="Avatar"/>
  <p>Hello. How are you today?</p>
  <span class="time-right">11:00</span>
</div>

<div class="container darker">
  <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
  <p>Hey! I'm fine. Thanks for asking!</p>
  <span class="time-left">11:01</span>
</div>

<div class="container">
  <img src="/w3images/bandmember.jpg" alt="Avatar"/>
  <p>Sweet! So, what do you wanna do today?</p>
  <span class="time-right">11:02</span>
</div>

<div class="container darker">
  <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
  <span class="time-left">11:05</span>
</div>
  </div>
     
     
    )
  }
}

export default Msg;