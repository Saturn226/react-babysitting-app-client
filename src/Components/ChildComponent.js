import React from 'react'
import { List, Modal, Image, Segment, Icon } from "semantic-ui-react"
export default class ChildComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    var child = this.props.child;
    return (
      <Segment id="child-info" padded={"very"}>
        <div>
          <Image
            src={child.image}
            size="small"
            floated="left"
          />
          <h1>{child.first_name} {child.last_name}</h1>
          <h4>{child.age} years old</h4>
          <p>{child.notes}</p>
          

          <ActivitiesComponent events={child.events} child={child} />
        </div>
      </Segment>
    );
  }
}

var child = {
  first_name: "Ashley",
  last_name: "Muller",
  image:"https://blackhairinformation.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-25-at-8.30.05-AM-300x295.png",
  age: 4,
  id: 1,
  notes:
    "Sweet Child. Has some peanut allergies. Bedtime is usually around 12pm. Doesnt get along well with other children. Needs to work on sharing",
  events: [
    { id: 1, name: "nap", time: "5pm", comments: "none"},
    { id: 2, name: "homework", time: "2pm", comments: "none" },
    { id: 3, name: "homework", time: "2pm", comments: "none" },
    { id: 4, name: "homework", time: "2pm", comments: "none" },
    { id: 5, name: "homework", time: "2pm", comments: "none" },
    { id: 6, name: "homework", time: "2pm", comments: "none" },
    { id: 7, name: "homework", time: "2pm", comments: "none" }
  ]
};

