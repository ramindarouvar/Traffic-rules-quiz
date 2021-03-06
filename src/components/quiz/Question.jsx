import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleQuestion } from './../../actions/question';
import { addAnswer, updateAnswer } from './../../actions/userAnswers';
import { isEmpty } from 'lodash';

const Question = ({questionId}) => {
    const dispatch = useDispatch()
    // get current question from store after dispatching in useEffect
    const question = useSelector(state => state.question)
    const [answer, setAnswer] = useState(0)
    // get user answers array from store
    const userAnswers = useSelector(state => state.userAnswers);
    
    useEffect(() => {
        // action for get specified current question
        dispatch(getSingleQuestion(questionId));
    },[])
    useEffect(() => {
        // /If this is the first time the user has answered this question
            if( answer !== 0 && userAnswers.length < questionId){   
                // add answer
                dispatch(addAnswer(userAnswers, questionId, answer));
            }
        // To change the option previously entered as an answer to new option
            if( answer !== 0 && 
                userAnswers.length >= questionId && 
                answer !== userAnswers[questionId-1].userAnswer){
                // update answer
                dispatch(updateAnswer(userAnswers, questionId, answer));
            }
    })
    
    const handleAnswering = event => {
        // update answer state with entered option value
        setAnswer(event.target.value);
    }
    // For the first rendering that has not yet received the content of the question from the store, return the null to avoid rendering errors
    if(isEmpty(question)) {
        return null;
    }
    // After receiving the question from the store 
    else {
        if(question.imageUrl===""){  
            // If the question does not have an image.
            return(
                    <div id="question" key={questionId} className="row h-100 py-3 px-3 px-sm-5 mt-2 mb-3" style={{minHeight: "300px"}}>
                        <div className="col-12 d-flex flex-column">
                            <h3 className="font-weight-bold pb-2 mb-4">{`${question.id} : ${question.text}`}</h3>
                            <div className="options mr-1 flex-fill row justify-content-around ml-2 pr-3">
                                { // loading and showing each answer option content
                                    Object.keys(question.options).map(optionId => {
                                        return(
                                            <label key={`${questionId}${optionId}`} className="option col-12 col-sm-6 my-2" htmlFor={`option-${optionId}`}>
                                                <div className="position-relative d-inline-block">
                                                    <input type="radio" id={`option-${optionId}`} name="options" className="d-none" 
                                                            value={Number(optionId)}
                                                            onChange = {e => handleAnswering(e)}
                                                            style={{border: '3px solid black'}}
                                                    />
                                                        <span className={userAnswers.length >= questionId 
                                                                            // If the question has already been answered, make the color inside the circle blue
                                                                                ? 
                                                                            (userAnswers[questionId-1].userAnswer === optionId ? 
                                                                                "checkmark option-hover selected-option bg-primary"
                                                                                : "checkmark option-hover"
                                                                            )
                                                                            : "checkmark option-hover"
                                                                        }
                                                        >
                                                        </span>
                                                </div>
                                                <span className="option-hover">
                                                    {optionId})&nbsp; 
                                                    {question.options[optionId].text}
                                                    {question.options[optionId].optionImageUrl === "" 
                                                        ? 
                                                            null 
                                                                : 
                                                            // Show image in reply option if available 
                                                            <img className="img-thumbnail" src={question.options[optionId].optionImageUrl} alt="answer-option" />
                                                    }
                                                </span>
                                            </label>    
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
            )   
        }
        else {
            // If the question has an image.
            return ( 
                <div id="question" key={questionId} className="row h-100 py-3 px-3 px-sm-5 mt-2 mb-3" style={{minHeight: "300px"}}>
                    <div className="col-sm-8 d-flex flex-column">
                        <h3 className="font-weight-bold pb-2 mb-4">{`${question.id} : ${question.text}`}</h3>
                        <div className="options mr-4 flex-fill d-flex flex-column justify-content-around ml-2 pr-3">
                            {// loading and showing each answer option content
                                Object.keys(question.options).map(optionId => {
                                    return(
                                        <label key={`${questionId}${optionId}`} className="option mb-1" htmlFor={`option-${optionId}`}>
                                            <div className="position-relative d-inline-block">
                                                {/* Main radio button (not displayed) */}
                                                <input type="radio" id={`option-${optionId}`} name="options" className="d-none" 
                                                        value={Number(optionId)}
                                                        onChange = {e => handleAnswering(e)}
                                                        style={{border: '3px solid black'}}
                                                />
                                                {/* The custom button radio button element that is displayed */}
                                                <span className={userAnswers.length >= questionId ?
                                                                    // If the question has already been answered, make the color inside the circle blue
                                                                    (userAnswers[questionId-1].userAnswer === optionId ? 
                                                                        "checkmark option-hover selected-option bg-primary"
                                                                        : "checkmark option-hover"
                                                                    )
                                                                    : "checkmark option-hover"
                                                                }
                                                ></span>
                                            </div>
                                            <span className="option-hover">
                                                {optionId})&nbsp; 
                                                {question.options[optionId].text}
                                                {question.options[optionId].optionImageUrl === "" 
                                                    ? 
                                                    null 
                                                        :
                                                    // Show image in reply option if available 
                                                    <img className="img-thumbnail" src={question.options[optionId].optionImageUrl} alt="answer-option"/>
                                                }
                                            </span>
                                        </label> 
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-sm-4 text-center text-sm-right question-image mt-4 mx-auto mx-md-0 text-center">
                        {question.imageUrl === "" 
                            ? 
                            null 
                            : 
                            // Show the image in question
                            <img src={question.imageUrl} className="rounded border" alt="question"/>
                        }
                    </div>
                </div>
            );
        }
    }
}

export default Question;