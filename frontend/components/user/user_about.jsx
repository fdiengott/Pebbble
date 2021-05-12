import React from 'react'; 
import { Link } from 'react-router-dom'; 

class UserAbout extends React.Component {
  constructor(props) {
    super(props); 
  }

  // componentDidMount() {
  //   this.props.fetchUser(this.props.user.id); 
  // }

  render() {
    const { user } = this.props; 

    const bio = (user.bio ? <p>{user.bio}</p> : <Link to="/account/about/edit" className="pink-link">Add Bio</Link>)
    const website = (
      user.websiteUrl ? 
        <p>{user.websiteUrl}</p> : 
        <Link to="/account/about/edit" className="pink-link">Add website links</Link>
    )

    return (

      <section className="user-about">
        <div>
          <h3>Biography</h3>
          { bio }
        </div>
        <div>
          <p><i className="fas fa-map-marker-alt"></i>{user.location}</p>
          <p><i className="fas fa-users"></i>Member since {user.whenJoined}</p>
        </div>

        <hr/>

        <p>{user.followers} followers    {user.following} following</p>

        <div>
          <h3>Social</h3>
          {website}
        </div>
      </section>
    )
  }

}

export default UserAbout; 