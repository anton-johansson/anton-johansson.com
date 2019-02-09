import React, { Component } from 'react';
import { About, Contact, Footer, Header, Portfolio, Resume, Testimonials } from './components';
import resumeData from './resumeData';
import settings from './settings';
import { translate } from './services';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header settings={settings} translate={translate}/>
        <About translate={translate}/>
        <Resume settings={settings} translate={translate}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer settings={settings} translate={translate}/>
      </div>
    );
  }
}
