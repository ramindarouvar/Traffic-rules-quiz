import { combineReducers } from "redux";
import { questionsReducer } from './questions';
import { questionReducer } from './qestion';
import { userReducer } from './user';
import { userAnswersReducer } from './userAnswers';
import { quizEndedReducer } from './quizEnded';

export const reducers = combineReducers({
    questions: questionsReducer,
    question: questionReducer,
    currentUser: userReducer,
    userAnswers: userAnswersReducer,
    quizEnded: quizEndedReducer
})