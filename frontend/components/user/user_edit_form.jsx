import React from 'react'; 
import { Link } from 'react-router-dom'; 

import Avatar from './avatar'; 

class UserEditForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = this.props.currentUser; 

    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleFile = this.handleFile.bind(this); 
    this.deleteFile = this.deleteFile.bind(this); 
    this.openUploadInput = this.openUploadInput.bind(this); 
    
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id).then(
      () => this.setState({ ...this.props.currentUser })
    )
  }

  handleSubmit(e) {
    e.preventDefault(); 

    const formData = new FormData(); 
    
    formData.append('user[name]', this.state.name)
    formData.append('user[location]', this.state.location)
    formData.append('user[bio]', this.state.bio)
    formData.append('user[website_url]', this.state.websiteUrl)
    if (this.state.photoFile) {
      formData.append('user[profile_picture]', this.state.photoFile)
    }

    const formattedUser = {id: this.state.id, formData}; 

    this.props.updateUser(formattedUser).then(
      () => this.setState({ success: true, upload: false })
    ).then(() => window.scrollTo(0,0)); 
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: `${e.currentTarget.value}` });
    }
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  deleteFile() {
    // this.setState({ photoFile: "" })

    const formData = new FormData(); 
    formData.append('user[profile_picture]', "")
    const formattedUser = {id: this.state.id, formData}; 

    this.props.updateUser(formattedUser).then(
      () => this.setState({ success: true })
    ).then(window.scrollTo(0,0)); 
  }

  openUploadInput() {
    this.setState({ upload: !this.state.upload })
  }


  render() {
    const currentUser = this.state; 
    const { success, upload } = this.state; 
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
          errors.map((err, i) => <li key={i}>{err}</li> ) 
        }</ul>; 
    }

    debugger

    return (
      <main className="main-container">
        <div className="alert-banner">
          { alert }
        </div>
        <div className="edit-profile-form-container">
          <form className="edit-profile-form" onSubmit={this.handleSubmit}>
            <div className="delete-avatar-form">
              <Link to="/account/cards">
                <Avatar user={this.props.currentUser}/>
              </Link>
              <a className="pink-button" onClick={this.openUploadInput}>{upload ? "Cancel": "Upload new picture" }</a>
              <a className="gray-button" onClick={this.deleteFile}>Delete</a>
            </div>
            { 
              upload ? 
                <div className="new-avatar-form">
                  <input 
                    type="file" 
                    name="avatar-file" 
                    id="avatar-file"
                    onChange={this.handleFile}/>
                  <button className="pink-button upload-btn">Upload Now</button>
                </div> : 
                null 
            }
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