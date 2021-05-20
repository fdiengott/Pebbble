import React from 'react'; 
import { Link } from 'react-router-dom'; 


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons'


class UserAbout extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    // increase efficiency as 
    if (!this.props.userShowPage) {
      this.props.fetchUser(this.props.currentUser.id); 
    } 
  }

  render() {
    const { user, currentUser, userShowPage } = this.props; 

    // if it's a user show page, display their info, otherwise it's the current user's account page
    const renderedUser = userShowPage ? user : currentUser; 

    const bio = (renderedUser.bio ? 
      <p>{renderedUser.bio}</p> : 
      <Link to="/account/about/edit" className="pink-link">Add Bio</Link>)

    const website = (
      renderedUser.websiteUrl ? 
      <a href={renderedUser.websiteUrl} target="_blank">{renderedUser.websiteUrl}</a> : (
        userShowPage ? null : 
        <Link to="/account/about/edit" className="pink-link">Add website links</Link>
      )
    )
    
    return (
      <div className="user-about-container">
        <section className="user-about">
          <main className="bio-section">
            <h3>Biography</h3>
            { bio }
          </main>
          <aside className="gray-bg">
            <p><i>{
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              }</i>{renderedUser.location}</p>
            <p><i>{
                <FontAwesomeIcon icon={faUsers} />
              }</i>Member since {renderedUser.whenJoined}</p>
          </aside>
          <section>
            <span>{renderedUser.numFollowers} followers</span
              ><span>{renderedUser.numFollowing} following</span>
          </section>
          <div>
            <h3>Social</h3>
            {website}
          </div>
        </section>
      </div>
    )
  }

}

export default UserAbout; 