import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Input, Button } from "reactstrap";
import styled from "styled-components";

import { legacyLaunch } from "../launcher";

class LegacyForm extends Component {
  constructor() {
    super();
    this.state = {
      appids: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLaunch = this.handleLaunch.bind(this);
  }

  handleChange(e) {
    this.setState({ appids: e.target.value });
  }

  handleLaunch() {
    legacyLaunch(this.state.appids);
  }

  render() {
    return (
      <div>
        <Input
          className="form-control"
          placeholder="Games appids separated by commas. e.g.: 107410, 271590"
          type="text"
          onChange={this.handleChange}
        />
        {this.props.steamDown &&
          <small style={{ color: "#ff5357" }}>
            Steam API is currently down or you are not connected to the internet. This is the legacy steam idle.
          </small>}
        <br />
        <center>
          <Button className="start" color="primary" onClick={this.handleLaunch}>
            Start
          </Button>
        </center>
      </div>
    );
  }
}

export default LegacyForm;
