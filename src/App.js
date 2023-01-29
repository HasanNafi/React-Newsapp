
import './App.css';

import React, { useState } from "react";
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {

  const [progress,setProgress] = useState(0)
  let pageSize = 18;
  let apiKey = process.env.REACT_APP_NEWS_API


    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="ca" category="general"/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" country="ca" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" country="ca" category="entertainment"/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="ca" category="general"/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country="ca" category="health"/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country="ca" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" country="ca" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" country="ca" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  
}
export default App;

