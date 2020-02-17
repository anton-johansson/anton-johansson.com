import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import renderSocialLinks from './utils/render-social-links';
import translate from '../services/translate';

const Footer = class extends Component {
    render() {
        const {languageCode, settings} = this.props;
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {renderSocialLinks(settings)}
                        </ul>
                    </div>
                    <div id="go-top">
                        <AnchorLink href="#home" title={translate(languageCode, 'navigation.section.home')}>
                            <i className="icon-up-open"/>
                        </AnchorLink>
                    </div>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => ({
    languageCode: state.config.languageCode,
});

export default connect(mapStateToProps)(Footer);