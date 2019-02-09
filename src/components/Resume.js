import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    const {settings, translate} = this.props;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>{translate('resume.education.title')}</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              settings.education && settings.education.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{translate(`education.${item.educationKey}.name`)}</h3>
                      <p className="info">
                        {translate(`education.${item.educationKey}.specialization`)}
                        <span>&bull;</span> <em className="date">{translate(`month.${item.monthOfPassing}`)} {item.yearOfPassing}</em>
                      </p>
                      <p>
                        {item.achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>{translate('resume.work.title')}</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              settings.work && settings.work.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{translate(`work.${item.workKey}.name`)}</h3>
                      <p className="info">
                        {translate(`work.${item.workKey}.title`)}
                        <span>&bull;</span>
                        <em className="date">{translate(`month.${item.monthOfStart}`)} {item.yearOfStart} -{item.present && <span>present</span>}
                        </em>
                      </p>
                      <p>
                        {item.achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div> 
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>{translate('resume.skills.title')}</span></h1>
          </div>
          <div className="nine columns main-col">
   				  <div className="bars">
   				    <ul className="skills">
                {
                  settings.skills && settings.skills.map(item => {
                    return (
                      <li>
                        <span className={`bar-expand ${item.name.toLowerCase()}`}>
                        </span>
                        <em>{item.name}</em>
                      </li>
                    )
                  })
                }
   					  </ul>
   				  </div>
   			  </div>
        </div>
      </section>
    );
  }
}