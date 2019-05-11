import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "semantic-ui-react";
import '../../index.css';
import AppHeader from './AppHeader';
import CustomerTable from '../CustomerTable/CustomerTable';
import axios from 'axios';

import ModalCustomer from '../ModalCustomer/ModalCustomer'


// import CustomerList from '../CustomerList/CustomerList';



class App extends Component {
  state = {
    customers: []
  };

  server = "http://localhost:5000/api/customers";

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/customers")
      .then(response => {
        this.setState({ customers: response.data });
      })
      .catch(function(error) {
        console.log("componentdidmount error: ", error);
      });
  }

  handleAdd = customer => {
    let customers = this.state.customers.slice();
    customers.push(customer);
    this.setState({ customers: customer });
  };

  handleUpdate = customer => {
    let customers = this.state.customers.slice();
    for (let i = 0, n = customers.length; i < n; i++) {
      if (customers[i]._id === customer._id) {
        customers[i].firstname = customer.firstname;
        customers[i].lastname = customer.lastname;
        customers[i].email = customer.email;
        break;
      }
    }
    this.setState({ customers: customers });
  };

  handleDelete = customer => {
    let customers = this.state.customers.slice();
    customers = customers.filter(c => {
      return c._id !== customer._id;
    });
    this.setState({ customers: customers });
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <Container>
          {/* <CustomerList /> */}
          <ModalCustomer
            headerTitle="Add Customer"
            buttonTriggerTitle="Add neew"
            buttonColor="green"
            onAdded={this.handleAdd}
            server={this.server}
          />
          <CustomerTable
            onUpdated={this.handleUpdate}
            onDeleted={this.handleDelete}
            customers={this.state.customers}
            server={this.server}
          />
          {/* <CustomerTable customers={this.state.customers} /> */}
        </Container>
        <br />
      </div>
    );
  }
}

export default App;
