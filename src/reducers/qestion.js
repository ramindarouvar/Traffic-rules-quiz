export const questionReducer = (state={}, action) => {
    switch(action.type){
        case "GET_QUESTION":
            return {...action.payload};
        case "CLEAR_QUESTION":
            return {...action.payload};
        default:
            return state;
    }
}