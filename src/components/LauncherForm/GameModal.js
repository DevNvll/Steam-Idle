import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  FormGroup,
  Label,
  Input,
  ModalBody,
  ModalFooter
} from "reactstrap";

class GameModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleTime = this.handleTime.bind(this);
  }

  handleTime(e) {
    this.setState({ time: e.target.value });
  }

  handleAdd() {
    this.props.toggle();
    let gameObject = Object.assign({}, this.props.game, {
      time: this.state.time ? parseFloat(this.state.time) : 0
    });
    this.props.addGameToList(gameObject);
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
            {this.props.game.name} <small>{this.props.game.appid}</small>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleNumber">
                <b>For how long you want to idle?</b>
                {" "}
                <small>(in hours, 0 for unlimited)</small>
              </Label>
              <Input
                type="number"
                name="number"
                id="time"
                value={this.state.time}
                onChange={this.handleTime}
                placeholder="hours to idle"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleAdd}>
              Add game
            </Button>
            {" "}
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default GameModal;
