import React, {Component} from 'react';

class Event extends Component {
  constructor(props) {
    super(props);

    this.silenceView = this.silenceView.bind(this);
    this.shareView = this.shareView.bind(this);
  }

  silenceView(e) {
    e.preventDefault();
    this.props.pageChange(2);
  }

  shareView(e) {
    e.preventDefault();
    this.props.pageChange(3);
  }

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
          <a href="#" className="join" onClick={this.silenceView}>Join</a>

          <div className="social">
          </div>
        </div>

        <p className="memoria-link"><a href="#" onClick={this.shareView}>Keep your loved ones memory alive</a></p>
      </div>
    );
  }
}

export default Event;
