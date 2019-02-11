import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const {translate, settings} = this.props;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">{translate('contact.title')}</p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>E-mail: {settings.email}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
