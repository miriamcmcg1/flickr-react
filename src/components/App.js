import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import MainPage from "./MainPage";
import Image from "./Image";

library.add(faStroopwafel);

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route
              name="image"
              path="/image/:id/:server/:farm/:secret/:title"
              component={Image}
            />
          </div>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
