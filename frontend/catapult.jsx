import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let preloadedState;
    if (window.currentUser) {
        preloadedState = {
            session: { id: window.currentUser.id },
            entities: {users: {
                [window.currentUser.id]: window.currentUser,  
            }}
        };
       delete window.currentUser;
    } else {
        preloadedState = {};
    }
    const store = configureStore(preloadedState)
    window.store = store;
    ReactDOM.render(<Root store={store} />, root);
})