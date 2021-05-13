import React from 'react'; 
import { Link } from 'react-router-dom'; 


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons'


class UserAbout extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id); 
  }

  render() {
    const { user } = this.props; 

    const bio = (user.bio ? 
      <p>{user.bio}</p> : 
      <Link to="/account/about/edit" className="pink-link">Add Bio</Link>)

    const website = (
      user.websiteUrl ? 
      <p>{user.websiteUrl}</p> : 
      <Link to="/account/about/edit" className="pink-link">Add website links</Link>
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
              }</i>{user.location}</p>
            <p><i>{
                <FontAwesomeIcon icon={faUsers} />
              }</i>Member since {user.whenJoined}</p>
          </aside>
          <section>
            <span>{user.followers} followers</span
              ><span>{user.following} following</span>
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