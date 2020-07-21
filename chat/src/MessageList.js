import {Component} from "react";
import React from "react";
import "./App.css";

// const messages = ['hi', 'hello'];
 
class MessageList extends React.Component {
  
  constructor() {
    super()
    this.myRef = React.createRef() 
    this.state = {
      messages: ['hi', 'hello',  'hey', 'wel', 'sadhj', 'sdfsd', 'sefs', 'sfasdj', 'sfsdf', 'hgk', 'khgk', 'hi', 'hello',  'hey', 'wel', 'sadhj', 'sdfsd', 'sefs', 'sfasdj', 'sfsdf', 'hgk', 'siji'],
      message: '',
      responses: [ ],
      response: ''

    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
  
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  handleChange(e) {
    // this.scrollToBottom();
    this.setState({
      message: e.target.value
    })
    
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      messages: this.state.messages.concat(this.state.message),   
      message: ''  ,
      response: 'Thanks for asking questions... we will answer u shortly :)',
      responses: this.state.responses.concat(this.state.response)
    })
    
    
  }
  
  componentDidMount() {
    console.log("did mount");
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    console.log("render");
    return (
      <div >
        <p className="title" >Welcome Buddies...</p>
        <ul  className="chat">
        {this.state.messages.map(message => <li className="me" >{message}</li>)}
        </ul>
        <ul >
        {this.state.responses.map(response => <li className="him" >{response}</li>)}
        </ul>

        {console.log(this.state.messages)}
      {/* <ul >                 
        {this.props.newMessage.map(message => {
          return (
           <li className="me" key={message.id}> 
             
               {message.text}
             
           </li>
         )
       })}
     </ul>
     <ul >                 
     {this.props.messages.map(message => {
       return (
        <li className="him" key={message.id}>
            {message.senderId}           
          
            {message.text}
          
        </li>
      )
    })}
  </ul> */}
  {/* <div className="input"> */}
  <div style={{ float:"left", clear: "both", paddingTop: "50px" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
  <input onChange={this.handleChange} placeholder="Type your question and hit ENTER" className="input"  value={this.state.message} ></input><button className="send" onClick = {this.handleSubmit}>Send</button></div>
    //  </div>
     
    )
  }
}

export default MessageList;