import React, { Component } from "react";
import MessageCard from "./MessageCard";
import PostMessage from "./PostMessage";

class ChatHistory extends Component {
	state = {
		messages: [
			{ name: "Jake", comment: "Jake likes coffee" },
			{ name: "Jasmin", comment: "Jasmin likes tea" },
		],
	};

	render() {
		const { messages } = this.state;
		return (
			<main>
				<ul className='chat-history'>
					{messages.map((message, i) => {
						return (
							<li key={i}>
								<MessageCard message={message} />
							</li>
						);
					})}
				</ul>
				<section>
					<PostMessage addComment={this.addComment} />
				</section>
			</main>
		);
	}

	addComment = (comment) => {
		console.log(comment);
	};
}

export default ChatHistory;
