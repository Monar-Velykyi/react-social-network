const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

let initialState = {
    person: [
        { id: 1, name: 'Vanya' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Grisha' },
        { id: 4, name: 'Shisha' },
        { id: 5, name: 'Trisha' }
    ],
    personMessage: [
        { message: 'Kino' }
    ],
    textValue: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                personMessage: [
                    ...state.personMessage, {
                        message: state.textValue
                    }
                ],
                textValue: ''
            }
        case NEW_MESSAGE_TEXT:
            state.textValue = action.newMessage;
            return state
        default:
            return state;
    }
}

export default dialogsReducer;