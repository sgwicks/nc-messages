import React, { Component } from "react";

export default class Header extends Component {
  state = {
    user: "Jake",
    url:
      "https://www.thelabradorsite.com/wp-content/uploads/2019/03/Cute-puppy-Names-Over-200-Adorable-Ideas-LS-long.jpg"
  };

  render() {
    const { user, url } = this.state;

    return (
      <section>
        <img src={url} alt="avatar" />
        <h2>{user}</h2>
      </section>
    );
  }
}
