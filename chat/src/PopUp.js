import React, { Component } from "react";
import "./PopUp.css";
export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <p>NOTE: Please check the below keyword if you find difficulties in choosing the request.

Overview of keywords :
1. Infosys related
2. Charter related
3. ICOMS overview

INFOSYS RELATED:
1. Adding Mail IDs to DL 
2. Cubicle or Desktop or Laptop allocation (Note: you can type any one)
3. Adding URLs to Trusted Sites
4. Allocating ALM asset in AMS

CHARTER RELATED:
1. PID Activation
2. Adding Charter Mail to Charter DL
3. ALM request
4. ID request
5. VPN Request
6. Application Access for New Users
7. Trouble Tickets for Existing Users
8. Field Glass
9. Shared Folder Access request
10. NCSS Portal Access request
11. BRF Access request
12. Configuring Charter Outlook

ICOMS OVERVIEW:
1. Track Level Overview / Applications Used
2. Billing System
3. Residential
4. Commercial/Business
5. Transaction Supported/Scenario
6. ICOMS/ CRM/ ATLAS (Note: You can type any one request)

We are still updating to make you feel more comfort while using the chatbot. Thank you for using the application..!</p>
        </div>
      </div>
    );
  }
}
