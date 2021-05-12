import React from 'react'; 
import { Provider } from 'react-redux'; 
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import LoginFormContainer from './session_form/login_form_container'; 
import SignupFormContainer from './session_form/signup_form_container'; 
import Header from '../components/header/header'; 
import AccountContainer from './user/account_container'; 

const App = () => (
  <>
    <Switch>
      {/* CardFormComponent */}
      <Route path="/" component={Header}/>
    </Switch>
    <Switch>
      {/* <ProtectedRoute path="/account/about/edit" component={} /> */}
      <ProtectedRoute path="/account" component={AccountContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </>
); 

export default App; 
