import React from 'react'
import MainPageComponent from './MainPageComponent'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class SideNavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home" };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
   
        <Menu vertical id="side-menu">
        <Menu.Item as={Link} to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
      
         <Menu.Item as={Link} to="/about"
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />

        <Menu.Item as={Link} to="/children"
          name='children'
          active={activeItem === 'children'}
          onClick={this.handleItemClick}
        />
        </Menu>

    
    );
  }
}


