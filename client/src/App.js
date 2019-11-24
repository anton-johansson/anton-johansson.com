import React, { Component } from 'react';
import { About, Activity, Contact, Footer, Header, Tools, Resume, Testimonials } from './components';
import settings from './settings';
import { translate } from './services';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header settings={settings} translate={translate}/>
        <About settings={settings} translate={translate}/>
        <Activity translate={translate}/>
        <Resume settings={settings} translate={translate}/>
        <Tools settings={settings}/>
        <Testimonials settings={settings}/>
        <Contact settings={settings} translate={translate}/>
        <Footer settings={settings} translate={translate}/>
      </div>
    );
  }
}
