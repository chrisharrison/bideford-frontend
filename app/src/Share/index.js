import React, {Component} from 'react';

class Share extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1>Bideford</h1>
        </div>

        <div id="main-content">
          <h2>Keep your loved one's memory alive</h2>
          <p>
            <img src="/img/logo/memoria-app-logo.png" />
          </p>
          <p>
            The memorial app that helps you build the memories of your loved one's life
          </p>
          <p>
            <a href="/img/logo/apple-download.png"></a>
          </p>
          <p>
            <a href="#" onClick={this.props.homeView}>Back To Home</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Share;
