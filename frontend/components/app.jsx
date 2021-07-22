import React from 'react'; 
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import LoginFormContainer from './session_form/login_form_container'; 
import SignupFormContainer from './session_form/signup_form_container'; 
import HeaderContainer from './headerFooter/header_container'; 
import FooterContainer from './headerFooter/footer_container'; 
import AccountContainer from './user/account_container';
import UserEditFormContainer from './user/user_edit_form_container';
import CardIndexContainer from './cards/card_index_container';
import CardDetailsContainer from './cards/card_details_container';
import CardCreateFormContainer from './cards/card_create_form_container'; 
import CardEditFormContainer from './cards/card_edit_form_container'; 
import CollectionShowContainer from './collections/collection_show_container'; 
import CollectionModalContainer from './collections/collection_modal_container'; 

const App = () => (
  <>
    <CollectionModalContainer />
    {/* protect routes can only access if logged in; auth routes can only access if logged out */}
    <Route path="/" component={HeaderContainer}/> 
    <Switch>
      <Route path="/account/about/edit" component={UserEditFormContainer}/> 
      <Route path="/users/:userId" component={AccountContainer}/>
      <ProtectedRoute path="/cards/new" component={CardCreateFormContainer}/>
      <ProtectedRoute path="/cards/:cardId/edit" component={CardEditFormContainer}/>
      <Route path="/cards/:cardId" component={CardDetailsContainer}/> 
      <Route path="/collections/:collectionId" component={CollectionShowContainer}/> 
      <ProtectedRoute path="/account" component={AccountContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <Route path="/:category" component={CardIndexContainer}/>  */}
      <Route path="/" component={CardIndexContainer}/> 
    </Switch>
    <Route path="/" component={FooterContainer}/> 
  </>
); 

export default App; 
