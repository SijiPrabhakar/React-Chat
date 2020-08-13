import React from "react";
import "./MainPage.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Timestamp from 'react-timestamp';
class MainPage extends React.Component {
  
  constructor() {
    super()
    var today = new Date(),

    time = today.getHours() ;
    this.state = {
      NewUser: "BOT: Select a choice to proceed, \\n 1. Infosys Related Requests \\n 2. Charter Related Requests \\n 3. ICOMS Application overview \\n Kindly type a valid choice or type quit to exit",
      ExistingUser: "ExistingUser",
      currentDateTime: Date().toLocaleString(),
      currentTime: time,
      greeting: '',
      user: ''
    }
   
  }
  
  componentDidMount() {
    let wish;
    if( this.state.currentTime >=0 & this.state.currentTime <=11){
      wish = "Good Morning"
    }
    else if( this.state.currentTime >=12 & this.state.currentTime <=15){
      wish = "Good Noon"
    }
    else {
      wish= "Good Evening"
    }
    this.setState({
      greeting: wish
    })
   
  }

  render() {
    return (
      <div className="mainpage">
         <h3 className="header">{this.state.greeting} Buddy...<br/> Hope you & your loved ones are safe during this COVID-19 pandemic !! </h3>
         <div className="containers">
        
            <Link  to={{
              pathname: "/chat",
              userData: this.state.ExistingUser,
              user: "Existing User"
                }}>
              <button className="button" >Existing User</button>
              </Link>
            <br/><br/>
            
            <Link  to={{ pathname: "/chat",
                          userData: this.state.NewUser,
                          user: "New User"
                        }}>
                        <button className="button" >New User</button>
            </Link>
          </div>
        
          {/* <h2>{this.state.currentDateTime}</h2>
          <h2>{this.state.currentTime}</h2>           */}
         
      </div>
      
    )
  }
}
export default MainPage;