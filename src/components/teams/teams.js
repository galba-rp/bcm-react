import React, { Component } from 'react';
import TeamCard from "./teamCard/teamCard";

class Teams extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[teams.js] getDerivedstateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[teams.js] shouldComponentYpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[teams.js] getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('[teams.js] componentDidUpdate');
  }

  state = {  }
  render() { 
    console.log('rendering .....')
    return (
      <div className={"justify-content-around mt-5 d-flex"}>
        {this.props.teamDetails.map((team) => {
          console.log(team.img.data.data);
          return (
            <TeamCard
              key={team.name}
              teamData={team}
              click={this.props.clickMenpm}
              id={team.id}
            />
          );
        })}
      </div>
    );
  }
}
 
export default Teams;