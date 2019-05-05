import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import "./GridImage.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

class GridImage extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, smallScreen: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let smallScreen = window.innerWidth <= 750;
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      smallScreen: smallScreen
    });
  }

  render() {
    return (
      <div className="grid-image-div">
        <GridList
          cellHeight={200}
          cols={this.state.smallScreen ? 2 : 3}
          className={"grid-image-lis"}
          style={styles.gridListStyle}
        >
          {this.props.result.map(tile => (
            <GridListTile key={tile.id} cols={1}>
              <img src={tile.url} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={tile.tags.map((tag, idx) => (
                  <span key={idx}> {"#" + tag}</span>
                ))}
                actionIcon={
                  <IconButton
                    component={Link}
                    to={`/image/${tile.id}/${tile.server}/${tile.farm}/${
                      tile.secret
                    }/${tile.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

GridImage.propTypes = {
  result: PropTypes.array
};

export default withStyles(styles)(GridImage);
