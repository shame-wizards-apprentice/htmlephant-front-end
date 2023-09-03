import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./pages/menu"
import LoadGame from "./pages/loadgame"
import NewGame from "./pages/newgame"
import Game from "./pages/game"
import WinScreen from "./pages/winscreen"
import Endscreen from "./pages/endscreen"

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/menu"]}>
            <Menu />
          </Route>
          <Route exact path={["/game"]}>
            <Game />
          </Route>
          <Route exact path={["/load"]}>
            <LoadGame />
          </Route>
          <Route exact path={["/new"]}>
            <NewGame />
          </Route>
          <Route exact path={["/winscreen"]}>
            <WinScreen />
          </Route>
          <Route exact path={["/endscreen"]}>
            <Endscreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
