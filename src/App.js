import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TrafficQuiz from './components/containers/TrafficQuiz';

const App = () => {
    return ( 
        <BrowserRouter>
            <TrafficQuiz />
        </BrowserRouter>
     );
}

export default BrowserRouter(App);