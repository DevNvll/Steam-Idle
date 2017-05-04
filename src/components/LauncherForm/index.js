import React, { Component } from "react";
import { Button } from "reactstrap";

import { launch } from "../../launcher";

import GameInput from "./GameInput";
import GameModal from "./GameModal";
import GameQueue from "../GameQueue";
import LegacyForm from "../LegacyForm";

class LaunchForm extends Component {
  constructor() {
    super();
    this.state = {
      modalGame: {},
      modal: false,
      gameList: [],
      btnDisable: true,
      steamDown: false,
      time: 0
    };
    this.handleLaunch = this.handleLaunch.bind(this);
    this.handleClickGame = this.handleClickGame.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillMount() {
    let _self = this;
    fetch("http://api.steampowered.com/ISteamApps/GetAppList/v0001")
      .then(response => {
        return response.json();
      })
      .then(json => {
        _self.setState({ gameList: json.applist.apps.app });
      })
      .catch(err => {
        _self.setState({ steamDown: true });
      });
  }

  handleLaunch() {
    launch(this.props.gamesToLaunch);
    this.props.clearQueue();
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  handleClickGame(game) {
    this.setState({ modal: true, modalGame: game });
  }

  render() {
    return (
      <div>
        {(this.state.steamDown &&
          <LegacyForm steamDown={this.state.steamDown} />) ||
          <GameInput
            handleClickGame={this.handleClickGame}
            gameList={this.state.gameList}
          />}
        {!this.state.steamDown &&
          <small>* always check if the appid is correct.</small>}
        <br /><br />
        <GameModal
          show={this.state.modal}
          toggle={this.toggleModal}
          addGameToList={this.props.addGameToList}
          game={this.state.modalGame}
        />
        {this.state.steamDown ||
          <center>
            <Button
              className="start"
              color="primary"
              disabled={!this.props.gamesToLaunch.length > 0}
              onClick={this.handleLaunch}
            >
              Start
            </Button>
            {" "}
            <Button
              className="clear"
              color="primary"
              disabled={!this.props.gamesToLaunch.length > 0}
              onClick={this.props.clearQueue}
            >
              Clear Queue
            </Button>
          </center>}
        <br />
        <GameQueue
          removeGame={this.props.removeGame}
          games={this.props.gamesToLaunch}
        />
      </div>
    );
  }
}

export default LaunchForm;
