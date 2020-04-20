export const updateNewPostText = (text) => {
    const action = { type: 'NEW-POST-TEXT', newText: text }
    return action;
};

export const addNewPost = () => {
    const action = { type: 'ADD-POST' }
    return action;
}

export const updateNewMessageText = (text) => {
    const action = { type: 'NEW-MESSAGE-TEXT', newMessage: text };
    return action;
}

export const addNewMessage = () => {
    const action = { type: 'ADD-MESSAGE' }
    return action;
}

export const follow = (userId) => {
    const action = { type: 'FOLLOW', userId }
    return action;
}

export const unFollow = (userId) => {
    const action = { type: 'UNFOLLOW', userId }
    return action;
}