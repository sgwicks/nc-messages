import React, { Component } from "react";

export default class PostMessage extends Component {
  state = {
    user: "Jake",
    input: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user, input } = this.state;
    const newComment = {
      user,
      input
    };
    this.props.addComment(newComment);
    this.setState({
      input: ""
    });
  };

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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
