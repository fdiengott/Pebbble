// React Imports
import React from 'react'; 
import { Switch, Route, Link } from 'react-router-dom'; 

// Component Imports
import UserAbout from './user_about';


class Account extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const { currentUser } = this.props; 
    const avatar = currentUser.imageUrl || window.avatar_default; 

    const header = (
      <section>
        <div className="details-container">
          <img src={avatar} alt="Profile picture avatar"/>
          <ul role="list">
            <h3>{currentUser.name}</h3>
            <p>{currentUser.location}</p>
            <Link to="/account/about/edit">Edit Profile</Link>
          </ul>
        </div>
      </section>
    )

    const nav = (
      <ul role="list">
        <li><Link to="/account/cards">Cards</Link></li>
        <li><Link to="/account/collections">Collections</Link></li>
        <li><Link to="/account/likes">Liked Cards</Link></li>
        <li><Link to="/account/profile">About</Link></li>
      </ul>
    )

    return (
      <>
        { header }
        { nav }
        <hr/>
        <Switch>
          {/* this will include cards, collections, liked shots, and about, depending upon the url */}
          
          {/* how to make it so that these get the right props? One has a different container with a selector? */}
          {/* <Route path="/account/cards" component={CardsIndexContainer}/>  */}
          {/* <Route path="/account/likes" component={CardsIndexContainer}/>  */}

          {/* <Route path="/account/collections" component={CollectionsIndexContainer}/>  */}
          <Route path="/account/profile" component={UserAbout}/> 
        </Switch>
      </>
    )
  }
}

export default Account; 