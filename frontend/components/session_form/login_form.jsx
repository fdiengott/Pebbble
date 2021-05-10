import React from 'react'; 

const nullUser = {
  name: "",
  username: "",
  email: "", 
  password: "", 
}

class SessionForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = nullUser; 

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(); 
    this.props.processForm(this.state); 
    this.setState(nullUser);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value }); 
    }
  }

  render() {
    const { formType, errors, otherSession } = this.props; 

    let errorsList = null; 
    if (errors.length) {
      errorsList = (
        <ul className="session-form-errors">
          {errors.map((err, i) => ( <li key={i}>{err}</li> ))}
        </ul>
      )
    }

    return (
      <form onSubmit={this.handleSubmit}>
        { errorsList }
        <h2>{formType} to Pebbble</h2>
        <label htmlFor="username">Username</label>
        <input type="text" value={this.state.username} onChange={this.handleInput("username")}/>
        <label htmlFor="password">Password</label>
        <input type="text" value={this.state.password} onChange={this.handleInput("password")}/>

      </form>
    )
  }

}

export default SessionForm; 