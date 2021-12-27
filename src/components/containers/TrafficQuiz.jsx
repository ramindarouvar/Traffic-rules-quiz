import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import AboutUs from './../aboutUs/AboutUs';
import Contact from './../contact/contact';
import Questions from './../quiz/Questions';
import QuizEnd from './../quiz/QuizEnd';
import AnswersAndOptions from '../showingAnswers/AnswersAndOptions';
import Result from './../result/Result';
import QuizStart from './../quiz/QuizStart';
import Weather from './../weather/Weather';
import { isEmpty } from 'lodash';
import PageNotFound from '../pageNoyFound/PageNotFound';

const TrafficQuiz = () => {
    const questions = useSelector(state => state.questions); 
    const userAnswers = useSelector(state => state.userAnswers);
    const currentUser = useSelector(state => state.currentUser);

    return ( 
        <MainLayout>
            <Switch>
                <Route path="/" component={QuizStart} exact/>
                    <Route path="/quiz-questions" component={Questions} exact/>
                    <Route path="/quiz-end" component={QuizEnd} exact/>
                    <Route path="/quiz-result" 
                            render={userAnswers.length !== Object.keys(questions).length && isEmpty(currentUser) ? 
                                        () => {
                                            // Go to the first page if no exam has started
                                            return(<Redirect to="/"/>)
                                        } 
                                        :
                                        (userAnswers.length !== Object.keys(questions).length ?
                                            () => {
                                                // If the user has not answered all the questions, redirect to the questions page.
                                                return(<Redirect to="/quiz-questions" />)
                                            }
                                            :
                                            () => {
                                            // If the user has answered all the questions, render the result page.
                                            return(<Result />)
                                            }
                                            )
                                        } exact/>
                    <Route path="/quiz-user-answers" component={AnswersAndOptions} exact/>
                <Route path="/weather" component={Weather} exact/>
                <Route path="/about-us" component={AboutUs} exact/>
                <Route path="/contact" component={Contact} exact/>
                <Route component={PageNotFound} exact/>
            </Switch> 
        </MainLayout>
     );
    }
    
 
export default withRouter(TrafficQuiz);