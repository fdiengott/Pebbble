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
import HeaderContainer from '../components/header/header_container'; 
import AccountContainer from './user/account_container'; 

const App = () => (
  <>
    {/* Header should be protected. Inside header, have 2 renders. If path is for card upload change content and style */}
    {/* <ProtectedRoute path="/" component={Header}/>  */}
    <Route path="/" component={HeaderContainer}/> 
    <Switch>
      {/* <ProtectedRoute path="/account/about/edit" component={} /> */}
      <ProtectedRoute path="/account" component={AccountContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
    {/* <Route path="/" component={FooterContainer}/>  */}
  </>
); 

export default App; 
