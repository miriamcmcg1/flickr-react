import React, { Component } from "react"
import GridImage from "../containers/GridImage"
import Header from './Header'

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header isHomePage={true}/>
        <div>
          <GridImage/>
        </div>
      </div>
    );
  }
}

export default MainPage;
