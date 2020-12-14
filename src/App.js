import React, { Component } from "react";
import Login from "./containers/loginForm/login";
import "./App.css";
import Navbar from "./components/navBar/navbar";

import Teams from "./containers/teams/teams";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import CreateTeam from "./containers/createTeam/createTeam";
import Team from "./containers/teams/team/team";
import CreatePlayer from "./containers/createPlayer/createPlayer";

class App extends Component {
  state = {
    user: { logedIn: true },
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
    fetch("http://localhost:3000/teams")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ cards: [...this.state.cards, ...data] });
        console.log("fetched");
      });
  }

  handleCompetition = (name) => {
    // TODO  create compet table
    // then hide teams div and show table where name  equels compet name
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  loginHandler = (e) => {
    let user = { ...this.state.user };
    user.logedIn = true;
    this.setState({ user: user });
    console.log(this.state.user.logedIn);
  };

  render() {
    let show;
    if (this.state.user.logedIn) {
      show = (
        <div>
          {/* <Redirect to="/teams" /> */}
          <Route
            path="/teams"
            render={(props) => (
              <Teams
                {...props}
                teamDetails={this.state.cards}
                team={this.individialTeam}
                clickMe={this.handleCompetition}
              />
            )}
          />
          <Route path="/create-team" component={CreateTeam} />
          <Route path="/team" component={Team} />
          <Route path="/create-player" component={CreatePlayer} />
        </div>
      );
    } else {
      show = <Redirect to="/" />;
    }
    return (
      <Router>
        <Navbar />
        <Switch>
          {show}
          <Route
            exact
            path="/"
            render={(props) => <Login {...props} login={this.loginHandler} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
