import React, { Component } from "react";
// import { newuser } from "../../config/endPoints.json";
// import Axios from "axios";

class Register extends Component {
  state = {
    inputs: {
      username: "",
      password: ""
    }
  };

  onChange = ({ currentTarget: values }) => {
    let fields = { ...this.state.inputs };
    fields[values.name] = values.value;
    this.setState({
      inputs: fields
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // const newUser = {
    //   username: this.state.inputs.username,
    //   password: this.state.inputs.password
    // };
    // const url = newuser;
    // Axios.post(url, newUser)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  render() {
    const { username, password } = this.state.inputs;
    return (
      <div>
        <h5 className="heading">Register</h5>
        <div id="form">
          <form
            action="localhost:8080/newaccount"
            method="post"
            onSubmit={this.onSubmit}
          >
            <input
              name="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={this.onChange}
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={this.onChange}
            />
            <button className="btn">SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
