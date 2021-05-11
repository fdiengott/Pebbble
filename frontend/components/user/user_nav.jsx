import React from 'react'; 

const UserNav = ({logout}) => {
  return (
    <ul role="list" className="user-nav">
      <li><a onClick={logout}>Sign Out</a></li>
    </ul>
  )
}; 

export default UserNav; 
