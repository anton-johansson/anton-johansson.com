import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import renderSocialLinks from './utils/render-social-links';

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
                        <AnchorLink href="#home">
                            <i className="icon-up-open"/>
                        </AnchorLink>
                    </div>
                </div>
            </footer>
        );
    }
}