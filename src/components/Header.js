import React, { Component } from "react";
import SearchBar from "../containers/SearchBar";
import PropTypes from "prop-types";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="title-div">
          <Link to="/">
            <b className="title">FlickrCity</b>
          </Link>
        </div>
        {this.props.isHomePage ? <SearchBar /> : null}
      </div>
    );
  }
}

Header.propTypes = {
  isHomePage: PropTypes.bool.isRequired
};

export default Header;
