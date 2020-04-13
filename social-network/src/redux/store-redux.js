import { createStore, combineReducers } from 'redux';
import mainReducer from './mainpage-reducer';
import dialogsReducer from './dialogs-reducer';


let reducers = combineReducers({
    postsData: mainReducer,
    personData: dialogsReducer
});

let store = createStore(reducers);

export default store;