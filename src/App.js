import React, { Component } from 'react';
import './App.css';
import SideNavComponent from './Components/sideBar'

import NavBar from './Components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <SideNavComponent/>
      </div>
    );
  }
}

export default App;
