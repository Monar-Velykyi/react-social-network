const NEW_POST_TEXT = 'NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        { id: 1, post: 'Hi! Welcome' },
        { id: 2, post: 'Hi! How r u?' }
    ],
    textValue: ''
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST_TEXT:
            state.textValue = action.newText;
            return state
        case ADD_POST:
            let post = {
                id: state.posts.length + 1,
                post: state.textValue
            }
            state.posts.push(post);
            state.textValue = '';
            return state
        default:
            return state;
    }
}

export default mainReducer;