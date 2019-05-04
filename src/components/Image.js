import React, { Component } from "react"
import Header from "./Header"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import './Image.css'


class Image extends Component {
  url = `https://farm${this.props.match.params.farm}.staticflickr.com/${this.props.match.params.server}/${this.props.match.params.id}_${this.props.match.params.secret}.jpg`

  render() {
    return (
      <div>
        <Header isHomePage={true}/>
        <div className='div-image'>
            <img src={this.url} alt={this.props.match.params.title} className='image-div'/>
            <GridListTileBar
                title={this.props.match.params.title}
                className='gridtilebar'
            />
        </div>
      </div>
    );
  }
}

export default Image;
