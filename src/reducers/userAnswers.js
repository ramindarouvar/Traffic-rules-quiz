export const userAnswersReducer = (state=[], action) => {
    switch(action.type){
        case "ADD_ANSWER":
            return [...action.payload];
        case "UPDATE_ANSWER":
            return [...action.payload];
        case "CLEAR_ANSWERS":
            return [...action.payload];
        default:
            return state;
    }
}