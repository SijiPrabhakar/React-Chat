import React from "react";
import "./MainPage.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class MainPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      NewUser: "BOT: Select a choice to proceed, \\n 1. Infosys Related Requests \\n 2. Charter Related Requests \\n 3. ICOMS Application overview \\n Kindly type a valid choice or type quit to exit",
      ExistingUser: "ExistingUser",
    }
   
  }
  

  render() {
    return (
      <div className="mainpage">
         <h3 className="header"> Hey Buddy...Good Morning<br/> Hope you & your loved ones are safe during this COVID-19 pandemic !! </h3>
         <div className="containers">
        
            <Link  to={{
              pathname: "/chat",
              user: this.state.ExistingUser
                }}>
              <button className="button">Existing User</button>
              </Link>
            <br/><br/>
            <p>OR</p>
            <Link  to={{ pathname: "/chat",
                          user: this.state.NewUser
                        }}>
                        <button className="button">New User</button>
            </Link>
          </div>
         
      </div>
      
    )
  }
}
export default MainPage;