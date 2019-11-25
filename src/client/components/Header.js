import React, { Component } from 'react';
import ReactFitText from 'react-fittext';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import renderSocialLinks from './utils/render-social-links';
import getLanguageCode from '../services/get-language-code';

const getChangeLanguageData = () => {
    const languageCode = getLanguageCode();
    const generateURL = newTopDomain => {
        const currentURL = document.location.origin;
        return currentURL.replace(/^(.*)(\.\w+)(\:\d+)?$/, `$1${newTopDomain}$3`);
    }
    if (languageCode === 'en') {
        return {
            title: 'Svenska',
            url: generateURL('.se'),
            flag: 'sweden.png'
        }
    } else {
        return {
            title: 'English',
            url: generateURL('.com'),
            flag: 'united-kingdom.png'
        }
    }
};

export default class Header extends Component {
    render() {
        const {settings, translate} = this.props;
        const changeLanguageData = getChangeLanguageData();
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title={translate('navigation.show')}>{translate('navigation.show')}</a>
                        <a className="mobile-btn" href="#nav-hide" title={translate('navigation.hide')}>{translate('navigation.hide')}</a>
                        <ul id="nav" className="nav">
                            <li><AnchorLink href="#home">{translate('navigation.section.home')}</AnchorLink></li>
                            <li><AnchorLink href="#about">{translate('navigation.section.about')}</AnchorLink></li>
                            <li><AnchorLink href="#activity">{translate('navigation.section.activity')}</AnchorLink></li>
                            <li><AnchorLink href="#resume">{translate('navigation.section.resume')}</AnchorLink></li>
                            <li><AnchorLink href="#tools">{translate('navigation.section.tools')}</AnchorLink></li>
                            <li><AnchorLink href="#contact">{translate('navigation.section.contact')}</AnchorLink></li>
                            <li><img id='language-flag' src={`/images/flags/${changeLanguageData.flag}`} alt={changeLanguageData.title}/><a href={changeLanguageData.url}>{changeLanguageData.title}</a></li>
                        </ul>
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                            <ReactFitText minFontSize={40} maxFontSize={90}>
                                <h1>
                                    {translate('home.title')}
                                </h1>
                            </ReactFitText>
                            <h3 style={{color:'#fff', fontFamily:'sans-serif'}}>{translate('home.description')}</h3>
                            <hr/>
                            <ul className="social">
                                {renderSocialLinks(settings)}
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <AnchorLink href="#about">
                            <i className="icon-down-circle"></i>
                        </AnchorLink>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}
