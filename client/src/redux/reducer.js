const JOIN_USER = 'JOIN_USER';
const initialState = {
    name: '',
    room: ''
}

const joinUserReducer = (state = initialState, action) => {
    switch(action.type){
        case JOIN_USER: return {
            ...state,
            name: action.payload.name,
            room: action.payload.room
        }
        default: return state
    }
}

export default joinUserReducer;