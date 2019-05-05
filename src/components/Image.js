import React, { Component } from "react";
import Header from "./Header";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import "./Image.css";
import { getUrl } from "../actions/fetch";

class Image extends Component {
  url = getUrl({
    farm: this.props.match.params.farm,
    server: this.props.match.params.server,
    id: this.props.match.params.id,
    secret: this.props.match.params.secret
  });

  render() {
    return (
      <div>
        <Header isHomePage={false} />
        <div className="div-image">
          <img
            src={this.url}
            alt={this.props.match.params.title}
            className="image-div"
          />
          <GridListTileBar
            title={this.props.match.params.title}
            className="gridtilebar"
          />
        </div>
      </div>
    );
  }
}

export default Image;
