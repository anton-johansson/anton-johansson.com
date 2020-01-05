import React, { Component } from 'react';
import { About, Activity, Contact, Footer, Header, Tools, Resume } from './components';
import settings from './settings';

const SECTIONS = ['home', 'about', 'activity', 'resume', 'tools', 'contact'];

export default class App extends Component {
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
