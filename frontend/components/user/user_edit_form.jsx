import React from 'react'; 

class UserEditForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = this.props.currentUser; 

    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit(e) {
    e.preventDefault(); 

    this.props.updateUser(this.state).then(() => this.setState({ success: true })); 
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: `${e.currentTarget.value}` });
    }
  }

  render() {
    const currentUser = this.state; 
    const { success } = this.state; 
    const { errors } = this.props; 

    let alert; 
    let errorMessages; 
    if (success) {
      alert = (
        <div className="success-message">
          Profile updated successfully
        </div>
      )
    } else if (errors && errors.length) {
        alert = <div className="error-message">
          There was a problem updating your profile. 
        </div>
        errorMessages = <ul role="list" className="form-errors">{ 
          errors.map(err => <li>{err}</li> ) 
        }</ul>; 
    }

    const avatar = currentUser.profilePicture || window.avatar_default; 

    return (
      // NEED TO ADD HEADER, UPLOAD NEW PICTURE BUTTON AND COMPONENT. DELETE PICTURE COMPONENT
      <main className="main-container">
        { alert }
        <div className="edit-profile-form-container">
          <form className="edit-profile-form" onSubmit={this.handleSubmit}>
            <div className="delete-avatar-form">
              <div className="image-cropper">
                <img src={avatar} alt="Profile picture avatar"/>
              </div>
              <a className="pink-button">Upload new picture</a>
              <a className="gray-button">Delete</a>
            </div>
            <div className="new-avatar-form">

            </div>
            <label htmlFor="name">Name
              <input type="text" id="name" value={currentUser.name} onChange={this.handleInput("name")}/>
            </label>
            <label htmlFor="location">Location
              <input type="text" id="location" value={currentUser.location || ""} onChange={this.handleInput("location")}/>
            </label>
            <label htmlFor="bio">Bio
              <textarea id="bio" cols="30" rows="10"
                value={currentUser.bio || ""} 
                onChange={this.handleInput("bio")}
              />
            </label>

            <h3>ONLINE PRESENCE</h3>
            <label htmlFor="websiteUrl">Personal Website
              <input type="text" id="websiteUrl" value={currentUser.websiteUrl || ""} onChange={this.handleInput("websiteUrl")}/>
            </label>

            <button className="pink-button">Save Profile</button>
          </form>
        </div>
      </main>
    )
  }
}

export default UserEditForm; 