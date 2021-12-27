export const getAllQuestions = questions => {
    return async dispatch => {
        const allQuestions = questions;
        await dispatch({type: "INIT", payload: allQuestions});
    }
}