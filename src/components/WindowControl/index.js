import React, { Component } from "react";
import { remote } from "electron";
import styled, { keyframes } from "styled-components";
import { Dropdown, DropdownMenu, DropdownItem, Tooltip } from "reactstrap";

import Menu from "./Menu";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
`;

const Frame = styled.div`{
  display: flex;
  align-items: center;
  background: #222;
  height: 50px;
  -webkit-app-region: drag;
}`;

const Icons = styled.div`
  margin-left: auto;
  padding: 10px;
  font-size: 28px;
  color: #fff;
`;

const Icon = styled.i`{
  padding: 5px;
  cursor: default;
  opacity: 0.5;
  -webkit-app-region: no-drag;
  &:hover {
   opacity: 1;
  }
}`;

class WindowControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      tooltipOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMin = this.handleMin.bind(this);
    this.toggleTip = this.toggleTip.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleClose() {
    remote.BrowserWindow.getFocusedWindow().close();
  }

  handleMin() {
    remote.BrowserWindow.getFocusedWindow().minimize();
  }

  toggleTip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <Frame>
        <Menu version={this.props.version} />
        <Icons>
          {this.props.updateAvailable &&
            <Icon
              onClick={this.props.openUpdate}
              className="material-icons"
              style={{ color: "#045902", cursor: "pointer" }}
            >
              file_download
            </Icon>}
          {this.props.downloadingUpdate &&
            <span>
              <Rotate>
                <Icon
                  className="material-icons"
                  id="downloading"
                  style={{ color: "#045902", cursor: "pointer" }}
                >
                  cached
                </Icon>
              </Rotate>
              <Tooltip
                placement="bottom"
                isOpen={this.state.tooltipOpen}
                target="downloading"
                toggle={this.toggleTip}
              >
                Downloading Update.
                {" "}
                {Math.floor(this.props.updateProgress.percent)}
                %
              </Tooltip>
            </span>}

          <Icon
            onClick={this.handleMin}
            className="material-icons"
            style={{ top: "6px", position: "relative" }}
          >
            remove
          </Icon>
          <Icon onClick={this.handleClose} className="material-icons">
            close
          </Icon>
        </Icons>
      </Frame>
    );
  }
}

export default WindowControl;
