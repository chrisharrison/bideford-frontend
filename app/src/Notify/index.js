import React, {Component} from 'react';

class Notify extends Component {
  render() {
    return (
      <div>
        <a href="#" onClick={this.props.joinView}>
          <img src="/img/notification-screen.png" />
        </a>
      </div>
    );
  }
}

export default Notify;
