import React from 'react'; 
import { Provider } from 'react-redux'; 
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import LoginFormContainer from './session_form/login_form_container'; 
import SignupFormContainer from './session_form/signup_form_container'; 
import Header from '../components/header/header'; 



const App = () => (
  <>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Header />  
    </Switch>
  </>
); 

export default App; 