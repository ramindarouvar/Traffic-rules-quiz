import questions from "./../questionsJson/questions.json"

export const getSingleQuestion = questionId => {
    return async dispatch => {
        const question = await(questions[questionId]);
        await dispatch({ type: "GET_QUESTION", payload: question });
    };
};
// clear last question saved in store
export const clearQuestion = () => {
    return async dispatch => {
        const question = {};
        await dispatch({ type: "CLEAR_QUESTION", payload: question });
    };
};