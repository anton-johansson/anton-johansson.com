import React, { Component } from 'react';
import { About, Contact, Footer, Header, Portfolio, Resume, Testimonials } from './components';
import resumeData from './resumeData';
import data from './data';
import {translate} from './services';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header translate={translate} data={data}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
