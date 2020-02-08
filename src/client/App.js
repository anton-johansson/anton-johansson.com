import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Helmet } from 'react-helmet-async';
import { About, Activity, Contact, Footer, Header, Tools, Resume } from './components';
import settings from './settings';

import cssDefault from './public/css/default.css';
import cssLayout from './public/css/layout.css';
import cssMediaQueries from './public/css/media-queries.css';
import cssPopup from './public/css/magnific-popup.css';

import favicon from './public/favicon.png';

const SECTIONS = ['home', 'about', 'activity', 'resume', 'tools', 'contact'];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentSection: SECTIONS[0]};
        this.setCurrentSection = this.setCurrentSection.bind(this);
    }

    setCurrentSection({sectionName, direction}) {
        let newSectionName = sectionName;
        if (direction === 'down') {
            const index = SECTIONS.indexOf(sectionName);
            newSectionName = SECTIONS[index + 1];
        }
        this.setState({currentSection: newSectionName});
    }

    render() {
        return (
            <div className="App">
                <Helmet>
                    <meta charset="utf-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="shortcut icon" href={favicon}/>
                </Helmet>
                <Header settings={settings} onScroll={this.setCurrentSection} currentSection={this.state.currentSection}/>
                <About settings={settings} onScroll={this.setCurrentSection}/>
                <Activity onScroll={this.setCurrentSection}/>
                <Resume settings={settings} onScroll={this.setCurrentSection}/>
                <Tools settings={settings} onScroll={this.setCurrentSection}/>
                <Contact settings={settings} onScroll={this.setCurrentSection}/>
                <Footer settings={settings}/>
            </div>
        );
    }
}

export default withStyles(cssDefault, cssLayout, cssMediaQueries, cssPopup)(App);
