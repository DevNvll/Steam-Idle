import React, { Component } from "react";
import { Media, Button } from "reactstrap";

let RenderGames = ({ games, removeGame }) => (
  <div>
    {games.map((game, i) => (
      <Media key={i}>
        <Media
          alt={game.name}
          object
          src={`http://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header_292x136.jpg`}
          onError={e =>
            (e.target.src =
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/765/e41b9489145e521153eb6b02774bb7a7f519cee8.jpg")}
          style={{ maxWidth: "200px" }}
        />
        <Media body style={{ paddingLeft: "10px" }}>
          <Media>
            <h6>
              {game.name}
              {" "}
              <small>ID: {game.appid}</small>
              {" "}
              <Button color="danger" size="sm" onClick={() => removeGame(i)}>
                X
              </Button>
            </h6>
          </Media>
          <small>
            {(game.time > 0 && "Time: " + game.time + " Hours") ||
              "Unlimited time"}
          </small>
        </Media>
      </Media>
    ))}
  </div>
);

class GameQueue extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "250px",
          overflow: "auto"
        }}
      >
        <RenderGames
          games={this.props.games}
          removeGame={this.props.removeGame}
        />
      </div>
    );
  }
}

export default GameQueue;
