const initialState = {
    name: 'Samuel',
    email: 'suporte@bemail.com.br'
}


const userReducer = (state = initialState, action) => {

    if (action.type === 'changeName') {
        return { ...state, name: action.payload.name }
    }

    return state;
};

export default userReducer;