import React from 'react'
import {Link} from 'react-router-dom'


export default class Children extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      children: []
    }
  }

  componentDidMount(){
    fetch('api/children')
      .then(response => response.json())
      .then(data => this.setState({
        children: data
      }))
  }
  render(){
    const children = this.state.children.map((child) =>{
      return (<li key={child.id}><Link to={`children/${child.id}`}> {child.name}</Link> {child.notes}</li>)
    })
    return(
      <div>
        List of All Children 
        <ul>{children}</ul>
      </div>
    )
  }
}
