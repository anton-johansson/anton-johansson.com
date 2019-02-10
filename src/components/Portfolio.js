import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    const {settings} = this.props;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                settings.tools && settings.tools.map(tool => {
                  return (
                    <div key={tool.name} className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={tool.url}>
                          <img src={`images/tools/${tool.name}.svg`} className="item-img tool-img"/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{tool.title}</h5>
                              <p>{tool.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
