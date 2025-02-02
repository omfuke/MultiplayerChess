import React from "react";
import Board from "./Board/Board";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Socket from "./Socket";
import Join from "./Join";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Board} />
          {/* {<Route exact path="/board" component={Join} />} */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
