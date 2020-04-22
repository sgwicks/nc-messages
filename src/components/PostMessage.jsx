import React, { Component } from "react";

export default class PostMessage extends Component {
	state = {
		user: "Jake",
		input: "",
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { user, input } = this.state;
		const newComment = {
			user,
			input,
		};
		this.props.addComment(newComment);
	};

	render() {
		const { input } = this.state;
		return (
			<form>
				<label>
					Write Message:
					<textarea
						name='input'
						value={input}
						onChange={this.handleChange}
						required
					/>
				</label>
				<button onSubmit={this.handleSubmit}>Post</button>
			</form>
		);
	}
}
