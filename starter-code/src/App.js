import React, { Component } from "react";

import "./App.css";
import usersJSON from "./users.json";

class App extends Component {
  state = {
    users: usersJSON,
    search: "",
    teacher: false,
    student: false
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      // [event.target.name]: event.target.value

      users: usersJSON.filter(
        user =>
          user.firstName
            .toLowerCase()
            .startsWith(event.target.value.toLowerCase()) ||
          user.lastName
            .toLowerCase()
            .startsWith(event.target.value.toLowerCase())
      )
    });
  };

  handleCheck = event => {
    this.setState({
      // [event.target.name]: event.target.checked
      users: usersJSON.filter(user => user.role === event.target.name)
    });
  };

  render() {
    // const newList = this.state.users.filter(user => this.state[user.role]);

    return (
      <div>
        <h1>Users</h1>
        <input
          type="text"
          name="searchName"
          placeholder="search..by Name"
          onChange={this.handleChange}
        ></input>
        <input
          type="checkbox"
          id="check"
          name="teacher"
          onChange={this.handleCheck}
        ></input>
        <input
          type="checkbox"
          id="check"
          name="student"
          onChange={this.handleCheck}
        ></input>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

const UsersList = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;
