import React, { Component } from "react";

class Login extends Component {
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

  render() {
    const { username, password } = this.state.inputs;
    return (
      <div>
        <h5 className="heading">Login</h5>
        <div id="form">
          <form action="" method="post">
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

export default Login;
