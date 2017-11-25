import React, {Component} from 'react';

class Notify extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1>Bideford</h1>
        </div>

        <div id="main-content">
          <h2>Notify</h2>
          <p>
            <a href="#" onClick={this.props.homeView}>Back To Home</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Notify;
