import {Component} from "react";
import React from "react";
// import "./App.css";
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
      message : "",
      identity: "user",
      obj: {
        "idname": "user",
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
      
      obj: {
        "idname": "user",
        "message": e.target.value
      },
      message:e.target.value
    })
    
  }

  handleSubmit(e) {
    e.preventDefault()
    
    
    console.log(this.state.obj+"OBJ")
    var json = JSON.parse(JSON.stringify(this.state.obj))
    console.log(json+"JSON")
  
    this.setState({
      messages: this.state.messages.concat(json),
      message : ""
    })
    let url = "http://127.0.0.1:5000/home/ds"
    
  //   // fetch(url).then(resp => resp.json()).then(messages => this.setState({messages}));

  //   fetch(url,{
  //     "method" : "POST",
  //     "body" : json,
  //     headers:{
  //         "Content-Type" : "application/json",
  //     },
  // }).then(obj => this.setState({obj}));


  const options = { 
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
       body: JSON.stringify(this.state.obj)
       
  }    
  
  fetch(url, options)
  .then(response => {      
   if (response.ok) {
           return response.json();
         } else {
            throw new Error('Something went wrong ...');
         }
       })
         .then(obj => this.setState({obj}))
         .then(messages => this.setState({messages: this.state.messages.concat(this.state.obj)}))
         .catch(error => this.setState({ error }));
    
    // this.setState({
    //   messages: this.state.messages.concat(this.state.obj),
    // })

    console.log(this.state.messages)
    console.log(json)
   
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
    this.scrollToBottom();
    
    console.log("did update");
  }
  render() {
    // console.log("render");
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
                   {/* {console.log(this.state.identity+ "$$"+data.idname+"$$"+data.message)} */}
                  <div className="msg">
                    <p>{data.idname}</p>
                    {/* {console.log(data.message+" MSG In bot")} */}
                    <div className="message"> {data.message}</div>
                  </div>
                </li>
              ) : (
                <li className="other">
                   {/* {console.log(this.state.identity+ "&&"+data.idname+"&&"+data.message)} */}
                  <div className="msg">
                    <p>{data.idname}</p>
                    {/* {console.log(data.message+" MSG")} */}
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
              value = {this.state.message}
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