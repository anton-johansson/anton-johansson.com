import React, { Component } from 'react';

export default class About extends Component {
  render() {
    const {translate} = this.props;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic"  src="images/profile.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>{translate('about.title')}</h2>
            <p>{translate('about.description')}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>{translate('about.contact')}</h2>
                <p className="address">
                  <span>Anton Johansson</span>
                  <br></br>
                  <span>Borås, Sweden</span>
                  <br></br>
                  <span><a href={translate('about.website')}>{translate('about.website')}</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
