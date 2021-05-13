// React Imports
import React from 'react'; 
import { Switch, Route, Link, NavLink } from 'react-router-dom'; 

// Component Imports
import UserAboutContainer from './user_about_container';
import UserEditFormContainer from './user_edit_form_container';

class Account extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    // REFACTOR TO USE FOR ANY USER, NOT JUST CURRENT USER

    const { currentUser, user } = this.props; 
    let avatar; 
    if (currentUser) {
      avatar = currentUser.profilePicture || window.avatar_default; 
    } else {
      avatar = user.profilePicture || window.avatar_default; 
    }
    
    // if there's a current user, personal account header, otherwise, user show page
    const header = currentUser ? (
      <section className='account-header-container'>
        <div className="details-container">
          <div className="image-cropper">
            <img src={avatar} alt="Profile picture avatar"/>
          </div>
          <ul role="list">
            <h1>{currentUser.name}</h1>
            <p>{currentUser.location}</p>
            <Link className="edit-profile-btn" to="/account/about/edit">Edit Profile</Link>
          </ul>
        </div>
      </section>
    ) : (
      <section className='user-show-container'>
        <div className="details-container">
          <div className="image-cropper">
            <img src={avatar} alt="Profile picture avatar"/>
          </div>
          <ul role="list">
            <h1>{currentUser.name}</h1>
            {/* <button>Follow</button> */}
            {/* <button className="pink-button">Hire Me</button> */}
          </ul>
        </div>
      </section>
    )

    const nav = (
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

    return (
      <div className="account">
        { header }
        { nav }
        <Switch>
          {/* this will include cards, collections, liked shots, and about, depending upon the url */}
          
          {/* how to make it so that these get the right props? One has a different container with a selector? */}
          {/* <Route path="/account/cards" component={CardsIndexContainer}/>  */}
          {/* <Route path="/account/likes" component={CardsIndexContainer}/>  */}

          {/* <Route path="/account/collections" component={CollectionsIndexContainer}/>  */}
          <Route path="/account/about/edit" component={UserEditFormContainer}/> 
          <Route path="/account/profile" component={UserAboutContainer}/> 
        </Switch>
        {/* FOR TESTING */}
        <footer></footer>
      </div>
    )
  }
}

export default Account; 