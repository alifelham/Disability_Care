import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpComponent from './component/SignUpComponent'
//import SignUpComponent from './component/SignUpComponent'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Routes>
            <Route exact path='/signup' element={< SignUpComponent />}></Route>
            <Route exact path='/login' element={< SignUpComponent />}></Route>
          </Routes>
      </Router>
    );
  }
}

export default App;
