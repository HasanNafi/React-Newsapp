
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<News pageSize={9} key="general" country="ca" category="general"/>} />
            <Route exact path="/business" element={<News pageSize={9} key="business" country="ca" category="business"/>}/>
            <Route exact path="/entertainment" element={<News pageSize={9} key="entertainment" country="ca" category="entertainment"/>} />
            <Route exact path="/general" element={<News pageSize={9} key="general" country="ca" category="general"/>} />
            <Route exact path="/health" element={<News pageSize={9} key="health" country="ca" category="health"/>} />
            <Route exact path="/science" element={<News pageSize={9} key="science" country="ca" category="science"/>} />
            <Route exact path="/sports" element={<News pageSize={9} key="sports" country="ca" category="sports"/>} />
            <Route exact path="/technology" element={<News pageSize={9} key="technology" country="ca" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

