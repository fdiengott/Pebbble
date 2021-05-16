import React from 'react'; 

const AccountNavBar = (props) => {

  return (
    <div className="account-nav-borderline">
      <nav className="account-nav">
        <ul role="list" className="account-nav-list">
          <li><NavLink to="/account/cards">Cards <span    
            className="user-stats">{/* cards */}</span></NavLink></li>
          <li><NavLink to="/account/collections">Collections <span    
            className="user-stats"
            >{/* collections */}</span></NavLink></li>
          <li><NavLink to="/account/likes">Liked Cards <span    
            className="user-stats"
            >{/* likes */}</span></NavLink></li>
          <li><NavLink to="/account/profile">About</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default AccountNavBar; 