import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import { fetchSearchImages } from "../actions/fetch";
import cities from "cities.json";
import Autosuggest from "react-autosuggest";

import "./SearchBar.css";

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : cities.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
      limit: this.props.limit,
      result: this.props.result,
      suggestions: []
    };
    this.onLimitChange = this.onLimitChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  async handleSubmit(event) {
    if (this.state.city !== "" && this.state.limit !== "") {
      const images = await fetchSearchImages(this.state.city, this.state.limit);
      localStorage.setItem(
        "search",
        JSON.stringify({ city: this.state.city, limit: this.state.limit })
      );
      this.props.updateSearch(this.state.city, this.state.limit);
      this.props.updateResult(images);
    }
  }

  async componentWillMount() {
    if (this.state.result.length === 0) {
      const images = await fetchSearchImages(this.state.city, this.state.limit);
      this.props.updateResult(images);
    }
  }

  onLimitChange = function(event) {
    this.setState({ limit: Number(event.target.value), city: this.state.city });
  };

  onCityChange = function(event, { newCity }) {
    this.setState({ limit: this.state.limit, city: newCity });
  };
  onCityChange = (event, { newValue }) => {
    this.setState({
      city: newValue
    });
  };

  async onSubmitSearch(e) {
    if (this.state.city !== "" && this.state.limit !== "") {
      const images = await fetchSearchImages(this.state.city, this.state.limit);
      localStorage.setItem(
        "search",
        JSON.stringify({ city: this.state.city, limit: this.state.limit })
      );
      this.props.updateSearch(this.state.city, this.state.limit);
      this.props.updateResult(images);
    }
  }

  render() {
    const inputProps = {
      placeholder: "Type a city",
      value: this.state.city,
      onChange: this.onCityChange
    };

    return (
      <form onSubmit={event => this.onSubmitSearch(event)}>
        <div className="searchbar-div">
          <Autosuggest
            className="city-input"
            suggestions={this.state.suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          <input
            className="limit-input"
            type="number"
            defaultValue={this.props.limit}
            onChange={event => this.onLimitChange(event)}
            min="0"
            max="100"
            step="1"
          />
          <div>
            <IconButton
              className="search-icon"
              type="submit"
              value="Submit"
              size="small"
              onClick={event => this.onSubmitSearch(event)}
            >
              <SearchIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  city: PropTypes.string,
  limit: PropTypes.number,
  result: PropTypes.array,
  updateSearch: PropTypes.func.isRequired,
  updateResult: PropTypes.func.isRequired
};
export default SearchBar;
