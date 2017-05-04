import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ipcRenderer } from "electron";

class UpdateModal extends Component {
  constructor() {
    super();
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    ipcRenderer.send("ACCEPT_UPDATE");
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.show}
          toggle={this.props.toggle}
          className={this.props.className}
          style={{ color: "#222" }}
        >
          <ModalHeader toggle={this.props.toggle}>
            Update available
          </ModalHeader>
          <ModalBody>
            A new update is available. Do you want to install now?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleUpdate}>
              Restart and Install
            </Button>
            {" "}
            <Button color="secondary" onClick={this.props.toggle}>
              Later
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdateModal;
