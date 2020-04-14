// import mainReducer from './mainpage-reducer';
// import dialogsReducer from './dialogs-reducer';

// let store = {
//     _state: {
//         postsData: {
//             posts: [
//                 { id: 1, post: 'Hi! Welcome' },
//                 { id: 2, post: 'Hi! How r u?' }
//             ],
//             textValue: ''
//         },
//         personData: {
//             person: [
//                 { id: 1, name: 'Vanya' },
//                 { id: 2, name: 'Misha' },
//                 { id: 3, name: 'Grisha' },
//                 { id: 4, name: 'Shisha' },
//                 { id: 5, name: 'Trisha' }
//             ],
//             personMessage: [
//                 { message: 'Kino' }
//             ],
//             textValue: ''
//         }
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this.renderPage = observer;
//     },
//     renderPage() {
//         console.log('Something')
//     },
//     dispatch(action) {
//         this._state.postsData = mainReducer(this._state.postsData, action);
//         this._state.personData = dialogsReducer(this._state.personData, action);

//         this.renderPage(this._state);
//     }

// }


// window.state = store;


// export default store;