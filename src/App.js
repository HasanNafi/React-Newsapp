
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pageSize = 18;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }
  setProgress = (Progress) => {
    this.setState({progress: Progress})
  }


  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" country="ca" category="general"/>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="business" country="ca" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="entertainment" country="ca" category="entertainment"/>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" country="ca" category="general"/>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="health" country="ca" category="health"/>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="science" country="ca" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="sports" country="ca" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="technology" country="ca" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

