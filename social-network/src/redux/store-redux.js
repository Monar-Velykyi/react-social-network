import { createStore, combineReducers } from 'redux';
import mainReducer from './mainpage-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer'


let reducers = combineReducers({
    postsData: mainReducer,
    personData: dialogsReducer,
    usersData: usersReducer
});

let store = createStore(reducers);

export default store;