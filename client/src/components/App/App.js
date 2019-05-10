import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import '../../index.css';
import AppHeader from './AppHeader';
import CustomerTable from '../CustomerTable/CustomerTable';

class App extends Component {
  state = {
    customers: [
      {firstname: "Abiral", lastname: "Rai", email: "abiral@gmail.com" },
      {firstname: "Sam", lastname: 'Smith', email: 'Smith@gmail.com'},
      {firstname: "Justin", lastname: 'tim', email: 'tim@gmail.com'}
    ]
  };
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Container>
          <CustomerTable customers={this.state.customers} />
        </Container>
      </div>
    );
  }
}

export default App;
