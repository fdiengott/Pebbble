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
    const { formType, errors, otherSession, email, name } = this.props; 
    const signin = (formType === "Sign In");

    const className = signin ? "login-form" : "signup-form"; 

    // if there are errors, display them, otherwise null
    let errorsList = null; 
    if (errors.length) {
      errorsList = (
        <ul className="session-form-errors">
          {errors.map((err, i) => ( <li key={i}>{err}</li> ))}
        </ul>
      )
    }

    // if it's a signup form, add the extra fields, otherwise no
    let emailInput; 
    if (email) {
      emailInput = (
        <>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={this.state.email} onChange={this.handleInput("email")}/>
        </>
      )
    }
    let nameInput; 
    if (name) {
      nameInput = (
        <>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleInput("name")}/>
        </>
      )
    }

    return (
      <div className={className}>
        <aside>
          <a className="logo">pebbble</a>
          <h2>Discover the world’s top Designers & Creatives.</h2>
          <div className={className+"-artwork"}></div>
          <p className="artist"></p>
        </aside>
        <section>
          <nav>{otherSession}</nav>
          <div className="form-container">
            <form className="auth-form" onSubmit={this.handleSubmit}>
              { errorsList }
              <h2>{formType} to Pebbble</h2>
              <div>
                { nameInput }
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={this.state.username} onChange={this.handleInput("username")}/>
              </div>
              { emailInput }
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={this.state.password} onChange={this.handleInput("password")}/>

              <input type="submit" value={signin ? "Sign In" : "Create Account" }/>
            </form>
          </div>
        </section>
      </div>
    )
  }

}

export default SessionForm; 


