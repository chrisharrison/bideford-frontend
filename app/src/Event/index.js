import React, {Component} from 'react';

class Event extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1>Bideford</h1>
        </div>

        <div className="header-info">
          <h1>David Bowie</h1>
          <p className="event-date">Wednesday, 10 January</p>
        </div>

        <div className="content">
          <h2>David Robert Jones</h2>
          <p className="event-date">(8 January 1947 - 10 January 2016)</p>

          <p>known professionally as David Bowie was an English singer, songwriter and actor. He was a leading figure in popular music... <a href="#">more</a></p>

          <h2>Remembrence starts tomorrow at 2pm</h2>
        </div>

        <div className="actions">
          <a href="#" className="join" onClick={this.props.silenceView}>Join</a>
          <a href="#" className="join" onClick={this.props.notifyView}>Notify Me</a>

          <div className="social">
          </div>
        </div>

        <p className="memoria-link"><a href="#" onClick={this.props.shareView}>Keep your loved ones memory alive</a></p>
      </div>
    );
  }
}

export default Event;
