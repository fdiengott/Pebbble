// React/redux imports
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

// component imports
import SessionForm from './session_form';
// actions
import { login, clearErrors } from '../../actions/session_actions'; 

const mapStateToProps = (state) => ({
  errors: state.errors, 
  formType: "Sign In",
  login: true,
  email: null, // if this is true, render on the form 
  name: null, 
})

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(login(user)), 
  clearErrors: () => dispatch(clearErrors()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm);