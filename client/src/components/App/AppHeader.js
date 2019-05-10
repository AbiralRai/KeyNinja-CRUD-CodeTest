import React, { Component } from "react";
import logo from "../../logo.svg";

class AppHeader extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-intro">Customer List</h1>
          <p>
            A simple records system using MongoDB, Express.js, React.js, and
            Node.js with real-time Create, Read, Update, and Delete operations
          </p>
          <p>
            REST API was implemented on the back-end. React-bootstrap was used
            for the UI.
          </p>
          <p>
            <a
              className="social-link"
              href="https://github.com/AbiralRai"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default AppHeader;
