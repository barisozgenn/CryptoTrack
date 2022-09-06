const INITIAL_STATE = {
    username: "baris",
    email: "baris@baris.com"
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return { ...state, username: action.payload }

        case "SET_EMAIL":
            return { ...state, email: action.payload }

        default:
            return state;
    }
}