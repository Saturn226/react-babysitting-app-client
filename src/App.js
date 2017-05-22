import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import NavBar from './Components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
      </div>
    );
  }
}

export default App;
