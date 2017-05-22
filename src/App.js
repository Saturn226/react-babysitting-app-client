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
const NotFound = () => (<div>Not Found</div>)
const About = () => <div>About</div>
const Home = () => <div>Home</div>

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <NavBar/>
            <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/about" component={About}/>
               <Route component={NotFound}/>
            </Switch>
          </div>
          </Router>
      </div>
    );
  }
}

export default App;
