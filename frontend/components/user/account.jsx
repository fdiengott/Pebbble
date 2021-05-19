// React Imports
import React from 'react'; 
import { Switch, Route, Link, NavLink } from 'react-router-dom'; 

// Component Imports
import UserAboutContainer from './user_about_container';
import CurrentUserHeader from './current_user_header'; 
import UserShowHeader from './user_show_header'; 
import AccountNavBar from './account_nav_bar'; 
import CardIndexContainer from '../cards/card_index_container'; 


class Account extends React.Component {
  componentDidMount() {
    if (this.props.userShow) {
      this.props.fetchUser(this.props.userId); 
    }
  }

  render() {
    const { 
      currentUser, 
      user, 
      userShow, 
      followingUser, 
      followUser, 
      unfollowUser,
      follows
    } = this.props; 
    
    // if neither have loaded early return
    if (userShow && !user) return null; 

    // if there's a current user, personal account header, otherwise, user show page
    const header = userShow ? (
      <UserShowHeader 
        user={user}
        followingUser={followingUser}
        followUser={followUser}
        unfollowUser={unfollowUser}
        currentUser={currentUser}
        follows={follows}
      />
    ) : (
      <CurrentUserHeader currentUser={currentUser} />
    )

    return (
      <div className="account">
        { header }

        {/* will need to pass some arguments for num cards, num collections, num likes.  */}
        <AccountNavBar user={user} />
        <Switch>
          {/* this will include cards, collections, liked shots, and about, depending upon the url */}
          
          <Route path="/account/cards" component={CardIndexContainer}/> 
          {/* <Route path="/account/likes" component={CardsIndexContainer}/>  */}
          {/* <Route path="/account/collections" component={CollectionsIndexContainer}/>  */}

          <Route path="/account/profile" component={UserAboutContainer}/> 
          <Route path="/users/:userId/cards" component={CardIndexContainer}/> 
          {/* <Route path="/users/:userId/likes" component={CardsIndexContainer}/>  */}
          {/* <Route path="/users/:userId/collections" component={CollectionsIndexContainer}/>  */}
          <Route path="/users/:userId/profile" component={UserAboutContainer}/> 
        </Switch>
      </div>
    )
  }
}

export default Account; 