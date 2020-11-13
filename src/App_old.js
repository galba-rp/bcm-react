import React, { Component } from "react";
import Login from "./loginForm/login";
import "./App.css";
import Navbar from "./navBar/navbar";
import Bad from "./images/bad.jpg";
import DF4 from "./images/df4.jpg";

import Teams from "./teams/teams";

class App extends Component {
  state = {
    user: { logedIn: true },
    login: { logIn: true },
    teams: { show: false },
    cards: [
      { id: 0, name: "D3", img: DF4 },
      { id: 1, name: "D5", img: Bad },
      { id: 2, name: "DF4", img: DF4 },
      { id: 3, name: "DH4", img: Bad },
    ],
  };

  handleLogin = () => {
    if (this.state.user.logedIn) {
      const login = { ...this.state.login };
      login.logIn = false;
      const teams = { ...this.state.teams };
      teams.show = true;
      this.setState({ login: login });
      setTimeout(() => {
        this.setState({ teams: teams });
      }, 500);
    }
  };

  handleCompetition = (name) => {
    // TODO  create compet table
    // then hide teams div and show table where name  equels compet name
  };

  render() {
    let teams = null;
    if (this.state.teams.show) {
      teams = (
        <Teams
          teamDetails={this.state.cards}
          team={this.individialTeam}
          clickMe={this.handleCompetition}
        />
      );
    }

    let login = null;
    if (this.state.login.logIn) {
      login = <Login login={this.handleLogin} />;
    }

    return (
      <div>
        <Navbar />
        {login}
        {teams}
      </div>
    );
  }
}

export default App;
