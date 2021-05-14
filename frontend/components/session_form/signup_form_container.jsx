// React/redux imports
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

// component imports
import SessionForm from './session_form';
// actions
import { signup, clearErrors } from '../../actions/session_actions'; 

const mapStateToProps = (state) => ({
  errors: state.errors, 
  formType: "Sign up",
  signup: true, 
  email: true, // if this is true, render on the form 
  name: true, 
}); 

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm);