import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFitText from 'react-fittext';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SectionWaypoint from './utils/SectionWaypoint';
import renderSocialLinks from './utils/render-social-links';
import { Waypoint } from 'react-waypoint';
import Translate from './utils/Translate';

const getChangeLanguageData = (languageCode, currentURL) => {
    const generateURL = newTopDomain => {
        return currentURL.replace(/^(.*)(\.\w+)(\:\d+)?(.*)$/, `$1${newTopDomain}$3`);
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

const getNavClass = state => {
    if (state.atTop) {
        return 'header-shown';
    } else if (state.beneathHeader) {
        return 'header-opaque';
    } else {
        return 'header-hidden';
    }
};

const Header = class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atTop: true,
            beneathHeader: false
        };
    }

    render() {
        const {languageCode, currentURL, settings, onScroll, currentSection} = this.props;
        const changeLanguageData = getChangeLanguageData(languageCode, currentURL);
        const navWrapperClass = getNavClass(this.state);

        return (
            <React.Fragment>
                <SectionWaypoint sectionName="home" onScroll={onScroll}>
                    <span>
                        <Waypoint onEnter={() => this.setState({beneathHeader: false})} onLeave={() => this.setState({beneathHeader: true})} topOffset={1}>
                            <header id="home">
                                <nav id="nav-wrap" className={navWrapperClass}>
                                    <a className="mobile-btn" href="#nav-wrap">
                                        <Translate labelKey='navigation.show'/>
                                    </a>
                                    <a className="mobile-btn" href="#nav-hide">
                                        <Translate labelKey='navigation.hide'/>
                                    </a>
                                    <ul id="nav" className="nav">
                                        <li className={currentSection === 'home' ? 'current' : ''}><AnchorLink href="#home"><Translate labelKey='navigation.section.home'/></AnchorLink></li>
                                        <li className={currentSection === 'about' ? 'current' : ''}><AnchorLink href="#about"><Translate labelKey='navigation.section.about'/></AnchorLink></li>
                                        <li className={currentSection === 'activity' ? 'current' : ''}><AnchorLink href="#activity"><Translate labelKey='navigation.section.activity'/></AnchorLink></li>
                                        <li className={currentSection === 'resume' ? 'current' : ''}><AnchorLink href="#resume"><Translate labelKey='navigation.section.resume'/></AnchorLink></li>
                                        <li className={currentSection === 'tools' ? 'current' : ''}><AnchorLink href="#tools"><Translate labelKey='navigation.section.tools'/></AnchorLink></li>
                                        <li className={currentSection === 'contact' ? 'current' : ''}><AnchorLink href="#contact"><Translate labelKey='navigation.section.contact'/></AnchorLink></li>
                                        <li><img id='language-flag' src={`/images/flags/${changeLanguageData.flag}`} alt={changeLanguageData.title}/><a href={changeLanguageData.url}>{changeLanguageData.title}</a></li>
                                    </ul>
                                </nav>
                                <div className="row banner">
                                    <Waypoint onEnter={() => this.setState({atTop: true})} onLeave={() => this.setState({atTop: false})} topOffset="10%"/>
                                    <div className="banner-text">
                                        <ReactFitText minFontSize={40} maxFontSize={90}>
                                            <h1>
                                                <Translate labelKey='home.title'/>
                                            </h1>
                                        </ReactFitText>
                                        <h3 style={{color:'#fff', fontFamily:'sans-serif'}}>
                                            <Translate labelKey='home.description'/>
                                        </h3>
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
                        </Waypoint>
                    </span>
                </SectionWaypoint>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    languageCode: state.config.languageCode,
    currentURL: state.config.currentURL,
});

export default connect(mapStateToProps)(Header);