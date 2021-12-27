import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TrafficQuiz from './TrafficQuiz';
 

const App = () => {
    return ( 
        <BrowserRouter>
            <TrafficQuiz />
        </BrowserRouter>
     );
}
  
export default App ;