import React, {Component} from 'react';

class ListLinks extends Component {
  render() {
    return (
      <div className="list-links">
        <a href="#" className="hoverState" onClick={this.props.eventView}>
          <img src="/img/upcoming-grid.png" alt="" />
        </a>
      </div>
    );
  }
}

export default ListLinks;
