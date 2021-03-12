
import './App.css';
import Home from './Components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/team/:idTeam">
          <TeamDetails></TeamDetails>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>

      </Switch>


    </Router>
  );
}

export default App;
