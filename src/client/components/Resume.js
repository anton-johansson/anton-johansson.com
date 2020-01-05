import React, {Component} from 'react';
import SectionWaypoint from './utils/SectionWaypoint';
import Translate from './utils/Translate';

export default class Resume extends Component {
    render() {
        const {settings, onScroll} = this.props;
        return (
            <SectionWaypoint sectionName="resume" onScroll={onScroll}>
                <section id="resume">
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1>
                                <span>
                                    <Translate labelKey='resume.education.title'/>
                                </span>
                            </h1>
                        </div>
                        <div className="nine columns main-col">
                        {
                            settings.education && settings.education.map(item => {
                                return (
                                    <div key={item.educationKey} className="row item">
                                        <div className="twelve columns">
                                            <h3>
                                                <Translate labelKey={`education.${item.educationKey}.name`}/>
                                            </h3>
                                            <p className="info">
                                                <Translate labelKey={`education.${item.educationKey}.specialization`}/>
                                                <span>&bull;</span>
                                                <em className="date">
                                                    <Translate labelKey={`month.${item.monthOfPassing}`}/> {item.yearOfPassing}
                                                </em>
                                            </p>
                                            <p>
                                                <Translate labelKey={`education.${item.educationKey}.description`}/>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        </div>
                    </div>
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1>
                                <span>
                                    <Translate labelKey='resume.work.title'/>
                                </span>
                            </h1>
                        </div>
                        <div className="nine columns main-col">
                        {
                            settings.work && settings.work.map(item => {
                                return (
                                    <div key={item.workKey} className="row item">
                                        <div className="twelve columns">
                                            <h3>
                                                <Translate labelKey={`work.${item.workKey}.name`}/>
                                            </h3>
                                            <p className="info">
                                                <Translate labelKey={`work.${item.workKey}.title`}/>
                                                <span>&bull;</span>
                                                <em className="date">
                                                    <Translate labelKey={`month.${item.monthOfStart}`}/> {item.yearOfStart} -{item.present && <span><Translate labelKey='present'/></span>}
                                                </em>
                                            </p>
                                            <p>
                                                <Translate labelKey={`work.${item.workKey}.description`}/>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        </div> 
                    </div>
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1>
                                <span>
                                    <Translate labelKey='resume.skills.title'/>
                                </span>
                            </h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="bars">
                                <ul className="skills">
                                {
                                    settings.skills && settings.skills.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <span className={`bar-expand ${item.name.toLowerCase()}`}/>
                                                <em>{item.name}</em>
                                            </li>
                                        );
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionWaypoint>
        );
    }
}