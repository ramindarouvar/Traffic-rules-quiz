export const finishQuiz = () => {
    return async dispatch => {
        await dispatch({type: "FINISH_QUIZ", payload: true})
    }
}
export const newQuiz = () => {
    return async dispatch => {
        await dispatch({type: "FINISH_QUIZ", payload: false})
    }
}