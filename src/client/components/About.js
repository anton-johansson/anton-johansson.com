import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import SectionWaypoint from './utils/SectionWaypoint';
import Translate from './utils/Translate';
import translate from '../services/translate';
import profileImage from '../public/images/profile.jpg';

const age = (() => {
    const birthDate = Date.parse("1990-04-14")
    const now = Date.now();
    return Math.floor((now - birthDate) / (365 * 24 * 60 * 60 * 1000));
})();

const About = class extends Component {
    render() {
        const {languageCode, settings, onScroll, currentURL} = this.props;
        const {emailAddress} = settings;
        return (
            <SectionWaypoint sectionName="about" onScroll={onScroll}>
                <section id="about">
                    <Helmet>
                        <title>{translate(languageCode, 'seo.title')}</title>
                        <meta name="description" content={translate(languageCode, 'seo.description', {age})}/>
                        <meta property="og:type" content="website"/>
                        <meta property="og:image" content={profileImage}/>
                        <meta property="og:title" content={translate(languageCode, 'seo.title')}/>
                        <meta property="og:description" content={translate(languageCode, 'seo.description', {age})}/>
                        <meta property="og:site_name" content="Anton Johansson"/>
                        <meta property="og:url" content={currentURL}/>
                        <meta property="twitter:card" content="summary"/>
                        <meta property="twitter:image" content={profileImage}/>
                        <meta property="twitter:title" content={translate(languageCode, 'seo.title')}/>
                        <meta property="twitter:description" content={translate(languageCode, 'seo.description', {age})}/>
                    </Helmet>
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src={profileImage} alt="Anton Johansson" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>
                                <Translate labelKey='about.title'/>
                            </h2>
                            <Translate labelKey='about.description' params={{age}}/>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>
                                        <Translate labelKey='about.contact'/>
                                    </h2>
                                    <p className="address">
                                        <span>Anton Johansson</span>
                                        <br></br>
                                        <span>Borås, Sweden</span>
                                        <br></br>
                                        <span>
                                            <a href={translate(languageCode, 'about.website')}>
                                                <Translate labelKey='about.website'/>
                                            </a>
                                        </span>
                                        <br></br>
                                        <span><a href={`mailto:${emailAddress}`}>{emailAddress}</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionWaypoint>
        );
    }
}

const mapStateToProps = state => ({
    languageCode: state.config.languageCode,
    currentURL: state.config.currentURL,
});

export default connect(mapStateToProps)(About);