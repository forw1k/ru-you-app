import React from "react";
import "./styles.scss";
import Palette from "../Palette";
import Form from "../Form"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <Router>
            <div className="switch">
              <div className="switch__form">
                <Link to="/">Форма</Link>
              </div>
              <div className="switch__palette">
                <Link to="/Palette">Палитра</Link>
              </div>
            </div>
            <Switch>
              <Route path="/Palette">
                <Palette />
              </Route>
              <Route path="/">
                <Form />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};
export default App;
