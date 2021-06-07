import React from 'react'; 
import { Link } from 'react-router-dom';
import Errors from '../util/errors';

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
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
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

  // DEMO LOGIN
  handleDemoLogin(e) {
    e.preventDefault(); 
    this.props.processForm({username: "fred", password: 123456}); 
  }

  render() {
    const { formType, errors, email, name } = this.props; 
    const signin = (formType === "Sign In");

    const className = signin ? "login-form" : "signup-form"; 

    // if it's a signup form, add the extra fields, otherwise no
    let emailInput = email ? (
      <label htmlFor="email">Email
        <input type="text" id="email" value={this.state.email} onChange={this.handleInput("email")}/>
      </label>
    ) : null; 

    let nameInput = name ? (
      <label htmlFor="name">Name
        <input type="text" id="name" value={this.state.name} onChange={this.handleInput("name")}/>
      </label>
    ) : null; 

    let demoLogin = (signin) ? (
      <div className="demo-login-button-container">
        <button 
          onClick={this.handleDemoLogin} 
          className="demo-login-button"
        >Demo Login</button>
        <div>
          <hr/>
          <p>Or</p>
          <hr/>
        </div>
      </div>
    ) : null; 
    

    const otherSession = this.props.login ? 
      <p>Not a member? <Link onClick={this.props.clearErrors} to="/signup">Sign Up</Link></p> :
      <p>Already a member? <Link onClick={this.props.clearErrors} to="/login">Sign In</Link></p>; 

    return (
      <div className="auth-form-container">
        <aside className={className+"-aside aside"}>
          <Link to="/all" className="logo">pebbble<span className="accessibility-text">Back to home page</span></Link>
          <h2>Discover the world’s top Designers & Creatives.</h2>
          <div className={className+"-artwork artwork"}></div>
          <cite className={className+"-artist"}></cite>
        </aside>
        <section>
          <nav>{otherSession}</nav>
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <Errors errors={errors}/>
              <h2>{formType} to Pebbble</h2>
              { demoLogin }
              <div className="name-container">
                { nameInput }

                <label htmlFor="username">Username
                  <input 
                    type="text" 
                    id="username" 
                    value={this.state.username} 
                    onChange={this.handleInput("username")}
                  />
                </label>
              </div>

              { emailInput }

              <label htmlFor="password">Password
                <input 
                  type="password" 
                  id="password" 
                  value={this.state.password} 
                  onChange={this.handleInput("password")} 
                  placeholder={signin ? null : "6+ characters"}
                />
              </label>

              <button>{ signin ? "Sign In" : "Create Account" }</button>
            </form>
          </div>
        </section>
      </div>
    )
  }

}

export default SessionForm; 


