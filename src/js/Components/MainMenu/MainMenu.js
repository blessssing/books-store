import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Menu, Label } from "semantic-ui-react";

import "./MainMenu.scss";
import Home from "@Components/Home";
import About from "@Components/About";
import Banner from "@images/banner-books.jpg";

function MainMenu() {
  const items = [
    { key: "editorials", name: "Editorials" },
    { key: "review", name: "Reviews" },
    { key: "events", name: "Upcoming Events" },
  ];

  return (
    <>
      <header>
        <h2>Books store</h2>
        <Label size="massive" image={Banner} />
      </header>

      <Router>
        <Menu>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/about">
            About
          </Menu.Item>
        </Menu>

        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={About} path="/about" />
        </Switch>
      </Router>
    </>
  );
}

export default MainMenu;
