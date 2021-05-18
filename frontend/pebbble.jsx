//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState;

  // if current user, load them into preloadedState under session and users
  if (window.currentUser) {
    preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    
    // remove them from the window. 
    delete window.currentUser;
  } else {
    preloadedState = {}; 
  }


  store = configureStore(preloadedState);

  // TESTING
  window.dispatch = store.dispatch; 
  window.getState = store.getState; 

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});