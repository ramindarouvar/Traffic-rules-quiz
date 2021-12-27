export const addAnswer = (userAnswers, questionId, userAnswerOption) => {
    return async dispatch => {
            const singleAnswer = {
                questionId: questionId,
                userAnswer: userAnswerOption
            }
            userAnswers.push(singleAnswer);
            await dispatch({type: "ADD_ANSWER", payload: userAnswers})
    }
}
export const updateAnswer = (userAnswers, questionId, userAnswerOption) => {
    return async dispatch => {
            userAnswers[questionId-1].userAnswer = userAnswerOption;
            await dispatch({type: "UPDATE_ANSWER", payload: userAnswers})
    }
}
export const clearAnswers = () => {
    const userAnswers = [];
    return async dispatch => {
        await dispatch({type: "CLEAR_ANSWERS", payload: userAnswers})
    }
}