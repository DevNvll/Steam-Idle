import React, { Component } from "react";
import { render } from "react-dom";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

import LegacyForm from "./components/LegacyForm";

class Legacy extends Component {
  render() {
    return (
      <Container>
        <center><h1>Legacy Steam Idler</h1></center><br />
        <LegacyForm />
      </Container>
    );
  }
}

render(<Legacy />, document.getElementById("root"));
