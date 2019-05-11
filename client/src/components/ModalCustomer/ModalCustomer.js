



import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import FormCus from '../FormCus/FormCus';


class ModalCustomer extends Component {
  render() {
    return (
      <Modal
        trigger={
          <Button color={this.props.buttonColor}>
            {this.props.buttonTriggerTitle}
          </Button>
        }
        dimmer="inverted"
        size="tiny"
        closeIcon="close"
      >
        <Modal.Header>{this.props.headerTitle}</Modal.Header>
        <Modal.Content>
          <FormCus
            buttonSubmitTitle={this.props.buttonSubmitTitle}
            buttonColor={this.props.buttonColor}
            customerID={this.props.customerID}
            onAdded={this.props.onAdded}
            onUpdated={this.props.onUpdated}
            server={this.props.server}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalCustomer;


// class ModalCustomer extends Component{

//     render() {

//             return (
//               <Modal
//                 trigger={
//                   <Button color={this.props.buttonColor}>
//                     {this.props.buttonTriggerTitle}
//                   </Button>
//                 }
//                 dimmer="blurring"
//                 size="tiny"
//                 closeIcon="close"
//               >
//                 <Modal.Header>
//                   {this.props.headerTitle}
//                 </Modal.Header>
//                 <Modal.Content>
//                   <FormCus
//                     buttonSubmitTitle={this.props.buttonSubmitTitle}
//                     buttonColor={this.props.buttonColor}
//                     customerID={this.props.customerID}
//                     onCustomerAdded={this.props.onCustomerAdded}
//                     onCustomerUpdated={this.props.onCustomerUpdated}
//                     server={this.props.server}
//                   />
//                 </Modal.Content>
//               </Modal>
//             );
//     }
// }

// export default ModalCustomer;
//     // state = {
//     //     modal: false
//     // };

//     // toggle = () => {
//     //     this.setState( prevState => ({
//     //         modal: !prevState.modal
//     //     }));
//     // }
//     // render() {
//     //     return (
//     //         <div>
//     //         {/* <button color="danger" onClick={this.toggle}>
//     //           {this.props.buttonLabel}
//     //         </button> */}
//     //         <Modal
//     //           isOpen={this.state.modal}
//     //           toggle={this.toggle}
//     //           className={this.props.className}
//     //         >
//     //           <ModalHeader toggle={this.toggle}>
//     //             Modal title
//     //           </ModalHeader>
//     //           <ModalBody>
//     //             Lorem ipsum dolor sit amet, consectetur adipisicing
//     //             elit, sed do eiusmod tempor incididunt ut labore et
//     //             dolore magna aliqua. Ut enim ad minim veniam, quis
//     //             nostrud exercitation ullamco laboris nisi ut aliquip ex
//     //             ea commodo consequat. Duis aute irure dolor in
//     //             reprehenderit in voluptate velit esse cillum dolore eu
//     //             fugiat nulla pariatur. Excepteur sint occaecat cupidatat
//     //             non proident, sunt in culpa qui officia deserunt mollit
//     //             anim id est laborum.
//     //           </ModalBody>
//     //           <ModalFooter>
//     //             <Button color="primary" onClick={this.toggle}>
//     //               Do Something
//     //             </Button>{" "}
//     //             <Button color="secondary" onClick={this.toggle}>
//     //               Cancel
//     //             </Button>
//     //           </ModalFooter>
//     //         </Modal>
//     //         </div>
//     //     );
//     // }
