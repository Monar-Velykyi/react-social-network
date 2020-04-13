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
        case 'ADD-MESSAGE':
            let newMessage = {
                message: state.textValue
            }
            state.personMessage.push(newMessage);
            state.textValue = '';
            return state
        case 'NEW-MESSAGE-TEXT':
            state.textValue = action.newMessage;
            return state
        default:
            return state;
    }
}

export default dialogsReducer;