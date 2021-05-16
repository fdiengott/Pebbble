// React Imports
import React from 'react'; 
import { Switch, Route, Link, NavLink } from 'react-router-dom'; 

// Component Imports
import UserAboutContainer from './user_about_container';
import CurrentUserHeader from './current_user_header'; 
import UserShowHeader from './user_show_header'; 
import AccountNavBar from './account_nav_bar'; 


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
      <CurrentUserHeader avatar={avatar} currentUser={currentUser}/>
    ) : (
      <UserShowHeader avatar={avatar} user={user}/>
    )

    return (
      <div className="account">
        { header }

        {/* will need to pass some arguments for num cards, num collections, num likes.  */}
        <AccountNavBar />
        <Switch>
          {/* this will include cards, collections, liked shots, and about, depending upon the url */}
          
          {/* how to make it so that these get the right props? One has a different container with a selector? */}
          <Route path="/account/cards" component={CardsIndexContainer}/> 

          {/* <Route path="/account/likes" component={CardsIndexContainer}/>  */}
          {/* <Route path="/account/collections" component={CollectionsIndexContainer}/>  */}

          <Route path="/account/profile" component={UserAboutContainer}/> 
        </Switch>
      </div>
    )
  }
}

export default Account; 