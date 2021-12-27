import { createStore } from "redux";
import thunk from "redux-thunk";
import { compose, applyMiddleware } from "redux";
import { reducers } from './../reducers/index ';
import { getAllQuestions } from "../actions/questions";
import questions from "./../questionsJson/questions.json"

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
      // ,
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// initialize questions
store.dispatch(getAllQuestions(questions)) // *

