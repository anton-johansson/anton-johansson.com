import React, { Component } from 'react';

const age = (() => {
    const birthDate = Date.parse("1990-04-14")
    const now = Date.now();
    return Math.floor((now - birthDate) / (365 * 24 * 60 * 60 * 1000));
})();

export default class About extends Component {
  render() {
    const {translate, settings} = this.props;
    const {emailAddress} = settings;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic"  src="images/profile.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>{translate('about.title')}</h2>
            {translate('about.description', {age})}
            <div className="row">
              <div className="columns contact-details">
                <h2>{translate('about.contact')}</h2>
                <p className="address">
                  <span>Anton Johansson</span>
                  <br></br>
                  <span>Borås, Sweden</span>
                  <br></br>
                  <span><a href={translate('about.website')}>{translate('about.website')}</a></span>
                  <br></br>
                  <span><a href={`mailto:${emailAddress}`}>{emailAddress}</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
