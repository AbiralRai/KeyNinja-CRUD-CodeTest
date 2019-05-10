import React, { Component } from "react";
import { Table } from "reactstrap";

import ModalCustomer from '../ModalCustomer/ModalCustomer';

class CustomerTable extends Component {

    render() {

        let customers = this.props.customers;

        customers = customers.map( (customer, index) => {
            return(

                <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{customer.firstname}</td>
                                <td>{customer.lastname}</td>
                                <td>{customer.email}</td>
                                <ModalCustomer 
                                buttonLabel='Edit'
                                className='classname'
                                />
                        </tr>
            );
        });

        

        return (
          <div className="customer-list">
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{customers}</tbody>
            </Table>
          </div>
        );
    }
}

export default CustomerTable;