import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import { Link } from "react-router-dom";


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class GridImage extends Component {
  render() {
    return (
      <div className='grid-image-div'>
        <GridList cellHeight={200} cols={3} className='grid-image-list' style={styles.gridListStyle}>
          {this.props.result.map(tile => (
            <GridListTile key={tile.id} cols={1}>
              <img src={tile.url} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={tile.tags.map((tag,idx) => (<span key={idx}> {'#' + tag}</span>))}
                actionIcon={
                  <IconButton component={Link} to={`/image/${tile.id}/${tile.server}/${tile.farm}/${tile.secret}/${tile.title}`}>
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
}

export default withStyles(styles)(GridImage);
