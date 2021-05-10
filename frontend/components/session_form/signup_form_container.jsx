// React/redux imports
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

// component imports
import SessionForm from './session_form';
// actions
import { signup } from '../../actions/session_actions'; 

const mapStateToProps = (state) => ({
  errors: state.errors.session, 
  formType: "Sign up",
  otherSession: <p>Already a member? <Link to="/login">Sign In</Link></p>,
  email: true, // if this is true, render on the form 
  name: true, 
}); 

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signup(user))
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm);