import classes from "./modal.module.css";
import React, { Component } from "react";

class Modal extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.show ? classes.Show : classes.Hide}>
        <div className={classes.Select}>
          <p onClick={()=>this.props.choose('YES')}>YES</p>
          <p onClick={()=>this.props.choose('NO')}>NO</p>
        </div>
        <button className="btn btn-primary" onClick={this.props.close}>
          Close
        </button>
      </div>
    );
  }
}

export default Modal;
