import React from 'react'
import SideNavComponent from './sideBar.js'
import { Menu } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const NotFound = () => (<div>Not Found</div>)
const About = () => <div>About</div>
import Children from '../views/Children'
import Home from '../views/Home'
import ChildShow from '../views/Children/show.js'

export default class MainPageComponent extends React.Component {
  render() {
    return (

      <Router>
         
      <div>
      
        <SideNavComponent/>
        <div className= "main">
        <Switch> 
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/children" component={Children}/>
         <Route exact path="/children/:id" component={ChildShow}/>
         <Route component={NotFound}/>
      </Switch>
      </div>
      </div>

    </Router>


        
    );
  }
}