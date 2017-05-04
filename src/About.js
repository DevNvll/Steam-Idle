import React, { Component } from "react";
import { render } from "react-dom";
import { Container } from "reactstrap";
import { shell, remote } from "electron";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

class About extends Component {
  render() {
    return (
      <Container>
        <center><h1>Steam Idle</h1></center>
        Created by <a
          href="#"
          onClick={() => {
            shell.openExternal("https://github.com/DevNvll");
          }}
        >
          DevNvll
        </a>.<br />
        Powered by <a
          href="#"
          onClick={() => {
            shell.openExternal("https://steamworks.github.io/");
          }}
        >
          Steamworks.NET
        </a>, <a
          href="#"
          onClick={() => {
            shell.openExternal("https://facebook.github.io/react/");
          }}
        >
          React
        </a> and <a
          href="#"
          onClick={() => {
            shell.openExternal("https://electron.atom.io");
          }}
        >
          Electron
        </a>.<br /><center>Version {remote.app.getVersion()}</center>
      </Container>
    );
  }
}

render(<About />, document.getElementById("root"));
