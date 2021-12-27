import React from 'react';

const QuizNav = ({onQuestionChange, questionId}) => {
    return ( 
        <div className="q-nav text-center">
            <div className="slidecontainer">
                <input type="range" className="slider"
                       value={questionId} min="1" max="30" 
                       onChange={e => {
                           const difference = e.target.value - questionId
                           // render the question seleted from range input 
                           onQuestionChange(difference);
                            }
                        }
                />
            </div>
            <div className="btn-group">
            {questionId===1 ? 
                    // Do not display the Go to "Previous" button when the user is on the first question.
                    null
                    :
                    <button type="submit" id="back-q" className="q-nav-botton btn btn-primary"  
                            onClick={() => {
                                // Send -1 to the method to change the question method to go to the previous question
                                onQuestionChange(-1)
                            }}
                    >   
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                        <span className="q-nav-text ml-3 active">قبلی</span>
                    </button>
                }
                <button type="submit" id="next-q" 
                        className={questionId === 30 ? "q-nav-botton btn btn-success" : "q-nav-botton btn btn-primary"}
                        onClick={() => {
                            // Send +1 to the method to change the question method to go to the next question  
                            onQuestionChange(1);
                        }}
                >
                        <span className="q-nav-text mr-2">{questionId === 30 ? "نتیجه" : "بعدی"}</span>{" "}
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            </div>
        </div>
     );
}

export default QuizNav;