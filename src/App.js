import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import NewsRealFetch2 from './components/NewsRealFetch2'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  pageSize = 20;
  apiKey = process.env.REACT_APP_NEWS_API


  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }





  render() {
    return (
      <div>
        <Router>
          {/* <News /> */}
          <Navbar />

          {/* Adding a Loading bar below Navbar */}
          <LoadingBar 
            height={4}
            color = '#f11946'
            progress={this.state.progress}
          
          />






          <Routes>
          
            <Route exact path="/" element={<NewsRealFetch2 apiKey={this.apiKey} setProgress = {this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route> 
            <Route exact path="/business" element={<NewsRealFetch2 apiKey={this.apiKey} setProgress = {this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>} ></Route> 
            <Route exact path="/entertainment" element={<NewsRealFetch2 apiKey={this.apiKey} setProgress = {this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route> 
            <Route exact path="/general" element={<NewsRealFetch2 apiKey={this.apiKey} setProgress = {this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route> 
            <Route exact path="/health" element={<NewsRealFetch2 apiKey={this.apiKey} setProgress = {this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route> 
            <Route exact path="/science" element={<NewsRealFetch2 apiKey={this.apiKey} setProgress = {this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route> 
            <Route exact path="/sports" element={<NewsRealFetch2 apiKey={this.apiKey} setProgress = {this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route> 
            <Route exact path="/technology" element={<NewsRealFetch2 apiKey={this.apiKey} setProgress = {this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route> 
          </Routes>


        </Router>
        
      </div>
    )
  }
}

export default App
