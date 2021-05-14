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
import UserEditFormContainer from './user/user_edit_form_container';
import CardIndexContainer from './cards/card_index_container';
import CardDetailsContainer from './cards/card_details_container';

const App = () => (
  <>
    {/* Header should be protected. Inside header, have 2 renders. If path is for card upload change content and style */}
    {/* <ProtectedRoute path="/" component={Header}/>  */}
    <Route path="/" component={HeaderContainer}/> 
    <Switch>
      <Route path="/account/about/edit" component={UserEditFormContainer}/> 
      <ProtectedRoute path="/account" component={AccountContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <Route path="/users/:userId" component={} /> */}
      <Route path="/cards/:cardId" component={CardDetailsContainer}/> 
      {/* <Route path="/" component={CardIndexContainer}/>  */}
      <Route path="/:category" component={CardIndexContainer}/> 

    </Switch>
    {/* <Route path="/" component={FooterContainer}/>  */}
  </>
); 

export default App; 
