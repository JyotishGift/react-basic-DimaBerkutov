import React, { Component } from 'react';
import Api from '../api.service';

import UserSearch from './UserSearch';
import UserList from './UserList';

class UserApp extends Component {
  state = {
    users: [],
    filteredUsers: []
  };
  filterUsers = e => {
    const filteredUsers = this.state.users.filter(user => {
      return user.name.includes(e.target.value);
    });
    this.setState({ filteredUsers });
  };
  async componentDidMount() {
    let users;
    users = await Api.getUsers();
    /*


    */
    const parsedUsers = users.results.map(user => ({
      name: `${user.name.first} ${user.name.last}`,
      picture: user.picture.thumbnail,
      email: user.email
    }));
    console.log(parsedUsers);

    // .then(users => {
    //   this.setState({ users, filteredUsers: users });
    // });
  }

  render() {
    return (
      <div>
        <UserSearch filterUsers={this.filterUsers} />
        <UserList users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default UserApp;
