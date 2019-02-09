import React, { Component } from 'react';
import { About, Contact, Footer, Header, Portfolio, Resume, Testimonials } from './components';
import resumeData from './resumeData';
import data from './data';
import { translate } from './services';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data={data} translate={translate}/>
        <About translate={translate}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer data={data} translate={translate}/>
      </div>
    );
  }
}
