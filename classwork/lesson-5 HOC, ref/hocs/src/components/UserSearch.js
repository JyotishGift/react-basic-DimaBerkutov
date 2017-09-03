import React from 'react';

const UserSearch = props => {
  return (
    <div>
      <input type="text" onChange={props.filterUsers}/>
    </div>
  );
};

export default UserSearch;
