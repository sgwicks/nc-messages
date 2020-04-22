import React, { Component } from "react";

export default class PostMessage extends Component {
  state = {
    user: "Jake",
    input: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
  };

  render() {
    const { input } = this.state;
    return (
      <form>
        <label>
          Write Message:
          <textarea
            name="input"
            value={input}
            onChange={this.handleChange}
            required
          />
        </label>
        <button>Post</button>
      </form>
    );
  }
}
