import React from "react";
import axios from "axios";

const CreateTeam = (props) => {
  const [state, setState] = React.useState({
    teamName: "",
    image: "",
    players: [{ name: "" }],
  });

  const changeHandler = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    if (name === "image") {
      value = event.target.files[0];
    }
    setState({
      ...state,
      [event.target.name]: value,
    });
    console.log(state, value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("image", state.image);
    formData.append("name", state.teamName);

    axios
      .post("http://localhost:3000/create-team", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("HERE", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div class="form-group">
        <label for="teamName">Team name</label>
        <input
          type="text"
          name="teamName"
          value={state.teamName}
          class="form-control"
          id="teamName"
          aria-describedby="teamNameHelp"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="form-group" onChange={changeHandler}>
        <input type="file" name="image" />
      </div>
      {state.players.map((val, idx) => {
        let playerId = "player${idx}";
        return (
          <div>
            <label for="exampleInputEmail1">Add player</label>
            <input
              type="text"
              name="playerName"
              value={state.teamName.playerName}
              class="form-control"
              id="teamPlayer"
              aria-describedby="teamNameHelp"
              onChange={changeHandler}
            ></input>
          </div>
        );
      })}
      <button class="btn btn-primary">Submit</button>
    </form>
  );
};

export default CreateTeam;
