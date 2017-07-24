import React from 'react'
import {Modal} from 'semantic-ui-react'

export default class ActivitiesComponent extends React.Component {
  render() {
    var events = this.props.events;
    var child = this.props.child;
    const Event_List = events.map(event =>
      <List.Item className="event-list-item" as="a" key={event.id}>
        <p>Activity: {event.name}</p>
        <p>Time: {event.time}</p>
        <p>Comments: {event.comments}</p>
            <Icon remove name="remove" className="icon-remove" size={"large"}/>                        
      </List.Item>
    );

    return (
      <Modal
        id="activity-modal"
        className="scrolling content"
        size={"small"}
        trigger={
          <h4 id="show-activity">click here to see list of activities</h4>
        }
      >
        <Modal.Header id="modal-header">
          <h2>Activity List for {child.first_name} {child.last_name} </h2>
        </Modal.Header>
       

       
        <Modal.Content id="modal-content">
          <div className="activities-container ">

            <List divided link size={"medium"}>
              {Event_List}
            </List>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}

