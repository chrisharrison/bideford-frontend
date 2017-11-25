import React, {Component} from 'react';
import Websocket from 'react-websocket';

class WebsocketComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleData(data) {
    let result = JSON.parse(data);
    if (result.totalCount) {
      this.props.handleCount(result.totalCount);
    }
  }

  render() {
    return (
      <Websocket url='ws://15e63168.ngrok.io' onMessage={this.handleData.bind(this)}/>
    );
  }
}

export default WebsocketComponent;