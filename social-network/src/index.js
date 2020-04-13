import store from './redux/store-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

let renderPage = (state) => {
    debugger;
    ReactDOM.render( <
        App dispatch = { store.dispatch.bind(store) }
        state = { store.getState() }
        /> ,
        document.getElementById('root')
    );
}

renderPage(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderPage(state)
})