import React, {Component} from 'react';

class Memoria extends Component {
  render() {
    return (
      <div>

        <div id="header" class="o-branding">
          <img src="/img/logo.svg" class="o-branding__logo" />
        </div>
        <div className="memoria-splash">
          <div className="heading">
            Keep your loved ones memory alive
          </div>
          <img src="/img/memoria-green.png"  className="full-logo"/>
          <p>The memorial app that helps you build the memories of your loved ones life.</p>
          <img src="/img/memoria-app-screen.png" />
        </div>
      </div>
    );
  }
}

export default Memoria;
