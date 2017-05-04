import React, { Component } from "react";
import styled from "styled-components";

import { shell } from "electron";

const Heart = styled.i`
  color: #ff5357;
`;

const Link = styled.a`
  text-decoration: none;
  transition: ease all 0.2s;
  &:hover {
    text-decoration: none;
  }
`;

class Footer extends Component {
  render() {
    return (
      <footer style={{ paddingBottom: 0 }}>
        This application was created with
        {" "}
        <Heart className="material-icons">favorite</Heart>
        {" "}
        by
        {" "}
        <Link
          href="#"
          onClick={() => {
            shell.openExternal("https://github.com/DevNvll");
          }}
        >
          DevNvll
        </Link>
        <br />

        <Link
          href="#"
          onClick={() => {
            shell.openExternal("https://github.com/DevNvll");
          }}
        >
          GitHub
        </Link>
        {" "}
        |
        {" "}
        <Link
          href="#"
          onClick={() => {
            shell.openExternal(
              "http://steamcommunity.com/profiles/76561198052893297"
            );
          }}
        >
          Steam
        </Link>
      </footer>
    );
  }
}

export default Footer;
