import React, { Component } from 'react';
import renderSocialLinks from './utils/render-social-links';

export default class Header extends Component {
  render() {
    const {settings, translate} = this.props;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title={translate('navigation.show')}>{translate('navigation.show')}</a>
            <a className="mobile-btn" href="#nav-hide" title={translate('navigation.hide')}>{translate('navigation.hide')}</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">{translate('navigation.section.home')}</a></li>
              <li><a className="smoothscroll" href="#about">{translate('navigation.section.about')}</a></li>
              <li><a className="smoothscroll" href="#resume">{translate('navigation.section.resume')}</a></li>
              <li><a className="smoothscroll" href="#tools">{translate('navigation.section.tools')}</a></li>
              <li><a className="smoothscroll" href="#testimonials">{translate('navigation.section.testimonials')}</a></li>
              <li><a className="smoothscroll" href="#contact">{translate('navigation.section.contact')}</a></li>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{translate('home.title')}</h1>
              <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{translate('home.description')}</h3>
              <hr/>
              <ul className="social">
                {renderSocialLinks(settings)}
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}