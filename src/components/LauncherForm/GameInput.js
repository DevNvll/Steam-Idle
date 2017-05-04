import React, { Component } from "react";
import Autosuggest from "react-autosuggest";

import { Input } from "reactstrap";

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name} <small>{suggestion.appid}</small></span>;
}

class GameInput extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
    this.suggestions = [];

    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.handleSuggestionClick = this.handleSuggestionClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.suggestions = this.props.gameList
      .filter(appid => {
        return (
          appid.name.toLowerCase().slice(0, value.length) ===
            value.toLowerCase() ||
          appid.appid.toString().slice(0, value.length) === value.toLowerCase()
        );
      })
      .slice(0, 10);
    this.setState({
      suggestions: this.suggestions
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  handleSuggestionClick(e, { suggestion }) {
    this.setState({ value: "" });
    this.props.handleClickGame(suggestion);
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type an exact game name or appid.*",
      className: "form-control",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.handleSuggestionClick}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default GameInput;
