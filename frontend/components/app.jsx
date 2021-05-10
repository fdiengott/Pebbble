import React from 'react'; 
import { Provider } from 'react-redux'; 
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import LoginFormContainer from './session_form/login_form_container'; 
import SignupFormContainer from './session_form/signup_form_container'; 
import UserNavContainer from './user/user_nav_container';



const App = () => (
  <div>
    <header>
      {<UserNavContainer />}
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
); 

export default App; 