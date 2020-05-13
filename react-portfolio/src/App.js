import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
