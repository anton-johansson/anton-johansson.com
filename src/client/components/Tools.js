import React, { Component } from 'react';
import SectionWaypoint from './utils/SectionWaypoint';
import Translate from './utils/Translate';
import toolJava from '../public/images/tools/java.svg';
import toolDocker from '../public/images/tools/docker.svg';
import toolGit from '../public/images/tools/git.svg';
import toolLinux from '../public/images/tools/linux.svg';
import toolEclipse from '../public/images/tools/eclipse.svg';
import toolJenkins from '../public/images/tools/jenkins.svg';
import toolNginx from '../public/images/tools/nginx.svg';
import toolElasticsearch from '../public/images/tools/elasticsearch.svg';

const Tool = ({name, title, description, targetURL, imageURL}) => (
    <div key={name} className="columns tools-item">
        <div className="item-wrap">
            <a href={targetURL}>
                <img src={imageURL} alt={title} className="item-img tool-img"/>
                <div className="overlay">
                    <div className="tools-item-meta">
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
);

export default class Tools extends Component {
    render() {
        const {onScroll} = this.props;
        return (
            <SectionWaypoint sectionName="tools" onScroll={onScroll}>
                <section id="tools">
                    <div className="row tools-header">
                        <div className="columns header-col">
                            <h2>
                                <span>
                                    <Translate labelKey='tools.title'/>
                                </span>
                            </h2>
                        </div>
                        <div className="nine columns main-col">
                            <Translate labelKey='tools.description'/>
                        </div>
                    </div>
                    <div className="row tools-content">
                        <div className="twelve columns collapsed">
                            <div id="tools-wrapper" className="bgrid-quarters p-bgrid-thirds s-bgrid-halves cf">
                                <Tool name="java" title="Java" description="Programming language" targetURL="https://www.java.com" imageURL={toolJava} />
                                <Tool name="docker" title="Docker" description="Containerisation engine" targetURL="https://www.docker.com" imageURL={toolDocker} />
                                <Tool name="git" title="Git" description="Version control system" targetURL="https://git-scm.com" imageURL={toolGit} />
                                <Tool name="linux" title="Linux" description="Operating system" targetURL="https://www.linux.org" imageURL={toolLinux} />
                                <Tool name="eclipse" title="Eclipse" description="Integrated development environment" targetURL="https://www.eclipse.org" imageURL={toolEclipse} />
                                <Tool name="jenkins" title="Jenkins CI" description="Continuous integration" targetURL="https://jenkins.io" imageURL={toolJenkins} />
                                <Tool name="nginx" title="NGINX" description="Load balancer and reverse proxy" targetURL="https://www.nginx.com" imageURL={toolNginx} />
                                <Tool name="elasticsearch" title="Elasticsearch" description="NoSQL database" targetURL="https://www.elastic.co/products/elasticsearch" imageURL={toolElasticsearch} />
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionWaypoint>
        );
    }
}
