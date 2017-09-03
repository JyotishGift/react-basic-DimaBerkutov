import React from 'react';

import LoaderHOC from './HOC/LoaderHOC';

@LoaderHOC('users')
class UserList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.users.map((user, index) =>
          <li key={index}>
            <img src={user.picture} />
            <div>
              <div>
                {user.name}
              </div>
              <div>
                {user.email}
              </div>
            </div>
          </li>
        )}
      </ul>
    );
  }
}

export default UserList;
