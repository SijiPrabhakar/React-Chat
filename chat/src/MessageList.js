import {Component} from "react";
import React from "react";
import "./App.css";
import "./GroupChat.css";
// const messages = ['hi', 'hello'];
 
class MessageList extends React.Component {
  
  constructor() {
    super()
    // this.myRef = React.createRef() 
    this.state = {
      // messages: ['hi', 'hello',  'hey', 'wel', 'sadhj', 'sdfsd', 'sefs', 'sfasdj', 'sfsdf', 'hgk', 'khgk', 'hi', 'hello',  'hey', 'wel', 'sadhj', 'sdfsd', 'sefs', 'sfasdj', 'sfsdf', 'hgk', 'siji'],
      // message: '',
      // responses: [],
      // response: 'welcome buddy... how can i help you?'
      messages: [
        {
          "idname": "bot",
         "message": "Hi User"
        },
        {
          "idname": "user",
          "message": "Hi Bot"
        }
      ],
      identity: "bot",
      obj: {
        "idname": "bot",
        "message": "Hello"
      }

    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
  
  }
  // scrollToBottom = () => {
  //   this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  // }
  
  handleChange(e) {
    // this.scrollToBottom();
    this.setState({
      message: e.target.value,
    })
    
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log(this.state.obj+"OBJ")
    var json = JSON.parse(JSON.stringify(this.state.obj))
    console.log(json+"JSON")
  
    this.setState({
      // messages: this.state.messages.concat(this.state.message),   
      // message: ''  ,
      // response: 'Thanks for asking questions... we will answer u shortly :)',
      messages: this.state.messages.concat(json)
     
    })  
   
  }
  scrollToBottom = () => {
    const chat = document.getElementById("chatList");
    chat.scrollTop = chat.scrollHeight;
  };
  componentDidMount() {
    console.log("did mount");
    this.scrollToBottom();
  }
  componentDidUpdate() {
    // this.scrollToBottom();
    console.log("did update");
  }
  render() {
    console.log("render");
    return (
      <div className="chatWindow">
        {/* <p className="title" >Welcome Buddies...</p> */}
        <ul  className="chat" id="chatList">
        {/* {this.state.messages.map(message =><div> <li className="self" >{message}</li></div>)} */}
        {/* {console.log(this.state.messages+"@@@@@")} */}
        {this.state.messages.map(data => (
            <div key={data.id}>
              {this.state.identity == data.idname ? (
               
                <li className="self">
                   {console.log(this.state.identity+ "$$"+data.idname+"$$"+data.message)}
                  <div className="msg">
                    <p>{data.idname}</p>
                    {console.log(data.message+" MSG In bot")}
                    <div className="message"> {data.message}</div>
                  </div>
                </li>
              ) : (
                <li className="other">
                   {console.log(this.state.identity+ "&&"+data.idname+"&&"+data.message)}
                  <div className="msg">
                    <p>{data.idname}</p>
                    {console.log(data.message+" MSG")}
                    <div className="message"> {data.message} </div>
                  </div>
                </li>
              )}
            </div>
          ))}

        </ul>
        {/* <ul >
        {this.state.responses.map(resp => <li className="other" >{resp}</li>)}
        </ul> */}
        <div className="chatInputWrapper">
          <form onSubmit={this.handleSubmit}>
            <input
              className="textarea input"
              type="text"
              placeholder="Enter your message..."
              onChange={this.handleChange}
            />
          </form>
        </div>
        </div>

  // <div style={{ float:"left", clear: "both", paddingTop: "50px" }}
  //            ref={(el) => { this.messagesEnd = el; }}>
  //       </div>
  // <input onChange={this.handleChange} placeholder="Type your question and hit ENTER" className="input"  value={this.state.message} ></input><button className="send" onClick = {this.handleSubmit}>Send</button></div>
  
     
    )
  }
}

export default MessageList;