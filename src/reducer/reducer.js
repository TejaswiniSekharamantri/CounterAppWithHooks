const initialState = {
    days: 11,
    hours: 31,
    minutes: 27,
    seconds: 11,
    activeSession: "days"
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                [action.payload]: state[action.payload] + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                [action.payload]: state[action.payload] - 1
            };
        case 'SESSION':
            return {
                ...state,
                activeSession: action.payload
            };
        default:
            return state;

    }
};

export default reducer;