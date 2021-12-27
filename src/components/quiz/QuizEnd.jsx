import React, { useState , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer } from './../../actions/userAnswers';
import { clearQuestion } from '../../actions/question';
import { Redirect } from 'react-router';
import { finishQuiz } from './../../actions/quizEnded';

const QuizEnd = () => {
    const [loading, setLoading] = useState(true);
    // get user questions from store
    const questions = useSelector(state => state.questions);
    // get user answers from store
    const userAnswers = useSelector(state => state.userAnswers);
    const quizEnded = useSelector(state => state.quizEnded);
    const dispatch = useDispatch()

    useEffect(() => {
        // go to top of the page
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // If the user has not answered all the questions
        if(userAnswers.length < Object.keys(questions).length){
            // Answer the unanswered questions to zero
            for (var i = userAnswers.length; i < Object.keys(questions).length; i++) {
                dispatch(addAnswer(userAnswers, i+1, 0));
            }
            dispatch(finishQuiz());
            // setLoading(false);
        }
        dispatch(clearQuestion());
        setTimeout(() => {
            // After 1000 milliseconds, set the loading state to "false" to render the result component
            setLoading(false);
        }, 1000); 
    },[])

    // If the exam is not over, redirect to the first page
    if(!quizEnded) return <Redirect to = "/" />

    return ( 
        <div className="quiz-section border rounded w-100">
            {loading ? 
                // show spinner for 1500 milliseconds
                    <div className="text-center py-5" style={{height: "400px"}}>
                        <div className="mt-3">
                            <img src="./images/spinners/loadingResult.gif" alt="preloader" className="mx-auto"/> 
                        </div>
                        <span className="h2" style={{color: "#6D8CFA"}}>محاسبه نمره ...</span>
                    </div>
                :
                // then show result component
                <Redirect to="/quiz-result" />
            }
        </div>
     );
}
 
export default QuizEnd;
