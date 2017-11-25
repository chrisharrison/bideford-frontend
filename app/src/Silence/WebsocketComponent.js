import React, {Component} from 'react';
import Websocket from 'react-websocket';

class WebsocketComponent extends Component {
  handleData(data) {
    let result = JSON.parse(data);
    if (result.totalCount) {
      this.props.handleCount(result.totalCount);
    }
  }

  render() {
    return (
      <Websocket url={this.props.socketUrl} onMessage={this.handleData.bind(this)}/>
    );
  }
}

export default WebsocketComponent;