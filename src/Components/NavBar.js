import React from 'react'

import { Menu } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


const NotFound = () => (<div>Not Found</div>)
const About = () => <div>About</div>
const Home = () => <div>Home</div>


class NavBarItems extends React.Component{

    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return(
        <Menu>
          <Menu.Item as={Link} to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item as={Link} to="/about"
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        </Menu>

    )
  }
}


export default function NavBar(){
  return(
    <Router>
      <div>
        <NavBarItems/>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route component={NotFound}/>
      </Switch>
    </div>
    </Router>
  )
}
