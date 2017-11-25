import React, {Component} from 'react';

class ListLinks extends Component {
  render() {
    const pageChange = this.props.pageChange;
    let eventLinks = [];

    for(let i = 0; i < 6; i++) {
      eventLinks.push(
        <li key={'event' + i}>
          <a href="#" onClick={this.props.eventView}>
            Event {i}
          </a>
        </li>
      );
    }
    return (
      <div className="list-links">
        <ul>
          {eventLinks}
        </ul>
      </div>
    );
  }
}

export default ListLinks;