import React, {Component} from 'react';
import ListLinks from './ListLinks';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="header" class="o-branding">
          <img src="/img/logo.svg" class="o-branding__logo" />
        </div>

        <div className="header-links">
          <ul className="c-header-carousel">
            <li className="c-header-carousel__item">
              <img src="/img/grenfelltower.png" alt="" />
            </li>
            <li className="c-header-carousel__item">
              <img src="/img/pauldaniels.png" alt="" />
            </li>
            <li className="c-header-carousel__item">
              <img src="/img/poppies.png" alt="" />
            </li>
          </ul>
          <div className="header-links__overlay">
            <div className="heading">100,473</div>
            <div className="sub-heading">People currently observing a minutes silence</div>
          </div>
        </div>


          <div className="event-search">
            <div className="card">
              <label htmlFor="event-search" className="o-search__label">Discover remembrence events</label>
              <div className="o-search">
                <input type="text" name="event-search" id="event-search" className="o-search__input" placeholder="Search" />

                <a href="#" className="o-search__button">
                  <svg width="18" height="18" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" fill="#fff"/></svg>
                </a>

              </div>
            </div>
          </div>

          <div className="heading-secondary">Upcoming remembrance events</div>


        <ListLinks eventView={this.props.eventView} />
      </div>
    );
  }
}

export default Home;
