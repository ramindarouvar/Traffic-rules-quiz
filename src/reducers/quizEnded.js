export const quizEndedReducer = (state = false, action) => {
    switch(action.type){
        case "FINISH_QUIZ":
            return action.payload;
        case "NEW_QUIZ":
            return action.payload;
        default:
            return state;
    }
}