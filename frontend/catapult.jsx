import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    // debugger
    const store = configureStore(preloadedState);
    ReactDom.render(<Root store={store} />, root);
})