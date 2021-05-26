import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import { Challenge1 } from "./components/Challenge1/Challenge1";
import { Challenge2 } from "./components/Challenge2/Challenge2";
import { Challenge3 } from "./components/Challenge3/Challenge3";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <h1>React App Playground</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/challenge1">Challenge 1</Link>
            </li>
            <li>
              <Link to="/challenge2">Challenge 2</Link>
            </li>
            <li>
              <Link to="/challenge3">Challenge 3</Link>
            </li>
          </ul>
        </nav>
        <div className="router-outlet">
          <Switch>
            <Route path="/challenge1">
              <Challenge1 />
            </Route>
            <Route path="/challenge2">
              <Challenge2 />
            </Route>
            <Route path="/challenge3">
              <Challenge3 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
