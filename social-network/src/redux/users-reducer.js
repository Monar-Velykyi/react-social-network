const FOLLOWING = 'FOLLOWING'

let initialState = {
    users: [
        { id: 1, name: 'Vanya', follow: true, status: 'Hi, i\'m Vanya!', location: [{ country: 'Ukraine', city: 'Odessa' }] },
        { id: 2, name: 'Misha', follow: false, status: 'lorem erngiwuerngiuwen uiwe rngiuen iu wenrnewiugr ', location: [{ country: 'Ukraine', city: 'Kiev' }] },
        { id: 3, name: 'Grisha', follow: true, status: 'Hi, i\'m Grisha!', location: [{ country: 'Ukraine', city: 'Vinnitsa' }] },
        { id: 4, name: 'Shisha', follow: false, status: 'Hi, i\'m Shisha!', location: [{ country: 'Ukraine', city: 'Odessa' }] },
        { id: 5, name: 'Trisha', follow: true, status: 'Hi, i\'m Trisha!', location: [{ country: 'Ukraine', city: 'Kharkov' }] }
    ]
}

const usersReducer = (state = initialState, action) => {

    return state;
}

export default usersReducer;