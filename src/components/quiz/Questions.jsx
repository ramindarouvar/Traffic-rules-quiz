import React, {useEffect, useState} from 'react';
import Question from './Question';
import QuizNav from './QuizNav';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer } from './../../actions/userAnswers';
import CountDownTimer from './../time/CountDownTimer';
import { Redirect } from 'react-router';
import { finishQuiz } from './../../actions/quizEnded';
import { isEmpty } from 'lodash';

const Questions = ({history}) => {
    const [questionId, setQuestionId] = useState(1);
    const userAnswers = useSelector(state => state.userAnswers);
    const currentUser = useSelector(state => state.currentUser);
    const quizEnded = useSelector(state => state.quizEnded)
    const dispatch = useDispatch()
    
    useEffect(() => {
        // go to top of the page
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },[])

    const handleQuestionChange = (difference) => {
        if(30 >= questionId+difference)
            // Set the ID of the new question for rendering 
            setQuestionId(questionId+difference);

        // If the user did not select an option for answering 
        if(userAnswers.length < questionId){
            // Add zero as the answer 
            dispatch(addAnswer(userAnswers, questionId, 0));
        }

        if(30 < questionId+difference){
            // set quizEnded true(in store)
            dispatch(finishQuiz())
        }
    }
    // This page will be rendered only if the user has filled in the start form, otherwise it will be redirected to the data entry page 
    if(isEmpty(currentUser)){
        return(
            <Redirect to="/" />
        )
    }
    if(quizEnded === true){
        // At the end of the exam, go to the exam end page. 
        return(
            <Redirect to="/quiz-end" />
        )
    }
    else{
        return (
            <div className="quiz-section border rounded w-100">
                <form className="question h-100" id="questionForm" onSubmit = {e => e.preventDefault()}>
                    {/* countdown timer component for showing remaining time */}
                    <CountDownTimer replyingDeadline={20} history={history}/>
                    {/* navigation for change questions */}
                    <QuizNav onQuestionChange={handleQuestionChange} questionId={questionId}/>
                    {/* render each question */}
                    <Question key={`q${questionId}`} questionId={questionId}/>
                </form>
            </div>
         );
    }
}
 
export default Questions;