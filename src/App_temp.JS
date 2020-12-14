import React, { Component } from "react";
import Login from "./containers/loginForm/login";
import "./App.css";
import Navbar from "./components/navBar/navbar";

import Teams from "./containers/teams/teams";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CreateTeam from "./containers/createTeam/createTeam";
import Team from "./containers/teams/team/team";

class App extends Component {
  state = {
    user: { logedIn: false },
    cards: [],
    // { id: 0, name: "D3", img: DF4 },
    // { id: 1, name: "D5", img: Bad },
    // { id: 2, name: "DF4", img: DF4 },
    // { id: 3, name: "DH4", img: Bad },
  };

  // handleLogin = () => {
  //   if (this.state.user.logedIn) {
  //     const login = { ...this.state.login };
  //     login.logIn = false;
  //     const teams = { ...this.state.teams };
  //     teams.show = true;
  //     this.setState({ login: login });
  //     setTimeout(() => {
  //       this.setState({ teams: teams });
  //     }, 500);
  //   }
  // };

  componentDidMount() {
    console.log("fretching");
    fetch("http://localhost:3000/teams")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ cards: [...this.state.cards, ...data] });
        console.log(this.state.cards[0].img.data);
      });
  }

  handleCompetition = (name) => {
    // TODO  create compet table
    // then hide teams div and show table where name  equels compet name
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  loginHnadler = () => {};

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          {!this.state.user.logedIn ? (
            <Route
              exact
              path="/"
              component={Login}
              login={this.loginHnadler}
            ></Route>
          ) : (
            <Redirect to="/teams" />
          )}
          <Route
            path="/teams"
            component={Teams}
            teamDetails={this.state.cards}
            team={this.individialTeam}
            clickMe={this.handleCompetition}
          />
          <Route path="/createteam" component={CreateTeam} />
          <Route path="/team" component={Team} />
        </div>
      </Router>
    );
  }
}

export default App;