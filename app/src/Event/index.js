import React, {Component} from 'react';

class Event extends Component {
  render() {
    return (
      <div>
        <div id="header" class="o-branding">
          <img src="/img/logo.svg" class="o-branding__logo" />
        </div>

        <div className="event-header-info">
          <img src="/img/davidbowie3.png" alt="David Bowie" />
          <div className="event-header-info__title">
            <div className="heading">David Bowie</div>
            <div className="event-date">Wednesday, 10 January</div>
          </div>
        </div>

        <div className="event-bio">
          <div className="heading">David Robert Jones</div>
          <div className="event-date">(8 January 1947 - 10 January 2016)</div>

          <p>Known professionally as David Bowie - he was an English singer, songwriter and actor. He was a leading figure in popular music ... <a href="#" className="t-link">more&nbsp;
          <svg width="14" height="14" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z" fill="#c94e5d"/></svg>

          </a></p>
        </div>

        <div className="card card-yellow remembrance-actions">
          <div className="heading">Remembrance starts tomorrow at 2pm</div>
          <a href="#" className="primaryButton" onClick={this.props.notifyView}>
          <img src="/img/button-icon.svg" className="icon"/> Notify me before the start</a>
        </div>


        <div className="actions">
          <div className="social">
            <p><b>Invite your friends to join you</b></p>
            <div className="pushSides">
              <img src="/img/social.png" alt="share" />
            </div>
          </div>
        </div>

        <a href="#" onClick={this.props.shareView} className="memoria-link">
          <img src="/img/memoria-tree-white.svg" />
          <span className="label">Keep your loved ones memory alive</span>
          <div className="chevron">
            <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" fill="#fff"/></svg>
          </div>
        </a>
      </div>
    );
  }
}

export default Event;
