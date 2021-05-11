// React/redux imports
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

// component imports
import SessionForm from './session_form';
// actions
import { login } from '../../actions/session_actions'; 

const mapStateToProps = (state) => ({
  errors: state.errors.session, 
  formType: "Sign In",
  otherSession: <p>Not a member? <Link to="/signup">Sign Up</Link></p>,
  email: null, // if this is true, render on the form 
  name: null, 
})

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(login(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm);