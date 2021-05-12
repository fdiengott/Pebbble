import React from 'react'; 

class UserEditForm extends React.Component {
  constructor(props) {
    super(props); 

    this.state = this.props.currentUser; 

    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit(e) {
    e.preventDefault(); 

    this.props.updateUser(this.state); 
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    }
  }

  render() {
    const {currentUser} = this.props; 

    return (
      // NEED TO ADD HEADER, UPLOAD NEW PICTURE BUTTON AND COMPONENT. DELETE PICTURE COMPONENT
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name
          <input type="text" id="name" value={currentUser.name} onChange={this.handleInput("name")}/>
        </label>
        <label htmlFor="location">Location
          <input type="text" id="location" value={currentUser.location || ""} onChange={this.handleInput("location")}/>
        </label>
        <label htmlFor="bio">Bio
          <textarea />
          <textarea id="bio" cols="30" rows="10"
            value={currentUser.bio || ""} 
            onChange={this.handleInput("bio")}
          />
        </label>

        <h3>ONLINE PRESENCE</h3>
        <hr/>
        <label htmlFor="websiteUrl">Personal Website
          <input type="text" id="websiteUrl" value={currentUser.websiteUrl || ""} onChange={this.handleInput("websiteUrl")}/>
        </label>

        <button className="pink-button">Save Profile</button>
      </form>
    )
  }
}

export default UserEditForm; 