import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import '../../index.css';
import AppHeader from './AppHeader';
import CustomerTable from '../CustomerTable/CustomerTable';
import axios from 'axios';

class App extends Component {
  state = {
    customers: []
  };
  componentDidMount(){
      axios.get('http://localhost:5000/api/customers')
        .then(response => {
          this.setState({ customers: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
      }
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
