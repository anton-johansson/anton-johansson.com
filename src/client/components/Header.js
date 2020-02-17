import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFitText from 'react-fittext';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SectionWaypoint from './utils/SectionWaypoint';
import renderSocialLinks from './utils/render-social-links';
import { Waypoint } from 'react-waypoint';
import Translate from './utils/Translate';
import flagSE from '../public/images/flags/sweden.png';
import flagUK from '../public/images/flags/united-kingdom.png';
import { translate } from '../services';

const getChangeLanguageData = (languageCode, currentURL) => {
    const generateURL = newTopDomain => {
        return currentURL.replace(/^(.*)(\.\w+)(\:\d+)?(.*)$/, `$1${newTopDomain}$3`);
    }
    if (languageCode === 'en') {
        return {
            title: 'Svenska',
            url: generateURL('.se'),
            flag: flagSE,
        }
    } else {
        return {
            title: 'English',
            url: generateURL('.com'),
            flag: flagUK,
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

const NavigationItem = ({name, languageCode, currentSection}) => (
    <li className={currentSection === name ? 'current' : ''}>
        <AnchorLink href={`#${name}`} title={translate(languageCode, `navigation.section.${name}`)}>
            <Translate labelKey={`navigation.section.${name}`}/>
        </AnchorLink>
    </li>
);

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
                                    <a className="mobile-btn" href="#nav-wrap" title={translate(languageCode, 'navigation.show')}>
                                        <Translate labelKey='navigation.show'/>
                                    </a>
                                    <a className="mobile-btn" href="#nav-hide" title={translate(languageCode, 'navigation.hide')}>
                                        <Translate labelKey='navigation.hide'/>
                                    </a>
                                    <ul id="nav" className="nav">
                                        <NavigationItem name="home" languageCode={languageCode} currentSection={currentSection}/>
                                        <NavigationItem name="about" languageCode={languageCode} currentSection={currentSection}/>
                                        <NavigationItem name="activity" languageCode={languageCode} currentSection={currentSection}/>
                                        <NavigationItem name="resume" languageCode={languageCode} currentSection={currentSection}/>
                                        <NavigationItem name="tools" languageCode={languageCode} currentSection={currentSection}/>
                                        <NavigationItem name="contact" languageCode={languageCode} currentSection={currentSection}/>
                                        <li><a className="nav-language" href={changeLanguageData.url} title={changeLanguageData.title}>{changeLanguageData.title} <img id='language-flag' src={changeLanguageData.flag} alt={changeLanguageData.title}/></a></li>
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
                                    <AnchorLink href="#about" title={translate(languageCode, 'navigation.section.about')}>
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