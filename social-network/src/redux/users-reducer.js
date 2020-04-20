const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: [
        { id: 1, name: 'Vanya', follow: true, status: 'Hi, i\'m Vanya!', location: { country: 'Ukraine', city: 'Odessa' } },
        { id: 2, name: 'Misha', follow: false, status: 'lorem erngiwuerngiuwen uiwe rngiuen iu wenrnewiugr ', location: { country: 'Ukraine', city: 'Kiev' } },
        { id: 3, name: 'Grisha', follow: true, status: 'Hi, i\'m Grisha!', location: { country: 'Ukraine', city: 'Vinnitsa' } },
        { id: 4, name: 'Shisha', follow: false, status: 'Hi, i\'m Shisha!', location: { country: 'Ukraine', city: 'Odessa' } },
        { id: 5, name: 'Trisha', follow: true, status: 'Hi, i\'m Trisha!', location: { country: 'Ukraine', city: 'Kharkov' } }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false }
                    }
                    return u;
                })
            }
        default:
            return state;

    }

}

export default usersReducer;