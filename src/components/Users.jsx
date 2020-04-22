import React, { Component } from "react";
import UserCard from "./UserCard";

export default class Users extends Component {
  state = {
    users: ["Jake", "Jasmin", "Sam", "Alex", "Mustabur"]
  };

  render() {
    const { users } = this.state;
    return (
      <aside>
        <ul className="users-list">
          {users.map((user, i) => {
            return (
              <li key={i}>
                <UserCard user={user} />
              </li>
            );
          })}
        </ul>
      </aside>
    );
  }
}
