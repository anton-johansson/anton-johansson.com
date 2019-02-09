import React, { Component } from 'react';
import renderSocialLinks from './render-social-links';

export default class Footer extends Component {
  render() {
    const {settings} = this.props;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {renderSocialLinks(settings)}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"/>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}