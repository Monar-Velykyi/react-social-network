import store from './redux/store-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import {Provider} from 'react-redux'

let renderPage = (state) => {
    ReactDOM.render( 
        <Provider store={store}>
        <App 
        dispatch = { store.dispatch.bind(store) }
        state = { store.getState() }
        /> 
        </Provider>,
        document.getElementById('root')
    );
}

renderPage(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderPage(state)
})

