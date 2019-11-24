import React, { Component } from 'react';

export default class Testimonials extends Component {
  render() {
    const { settings } = this.props;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    settings.testimonials && settings.testimonials.map(testimonial => {
                      return (
                        <li key={testimonial.name}>
                          <blockquote>
                            <p>{testimonial.description}</p>
                            <cite>{testimonial.name}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}