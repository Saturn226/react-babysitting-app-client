import React from 'react'
export default class ChildShow extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      name: "",
      age: "",
      notes: ""
    }
  }

  render(){
    return(
      <div>
        {this.state.name}
      </div>
    )
  }

}
