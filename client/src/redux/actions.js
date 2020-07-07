const JOIN_USER = 'JOIN_USER';
export const joinUser = (name, room) => {
    const data = {
        name,
        room
    }
    return {
        type: JOIN_USER, 
        payload: data
    }
}