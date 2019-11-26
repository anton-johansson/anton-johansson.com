import React, {Component} from 'react';
import {Waypoint} from 'react-waypoint';

export default class Activity extends Component {
    render() {
        const {children, sectionName, onScroll} = this.props;
        const onEnter = event => {
            if (event.currentPosition === 'inside' && event.previousPosition === 'above') {
                onScroll({sectionName, direction: 'up'});
            }
        };
        const onLeave = event => {
            if (event.currentPosition === 'above' && event.previousPosition === 'inside') {
                onScroll({sectionName, direction: 'down'});
            }
        }
        return <Waypoint onEnter={onEnter} onLeave={onLeave} bottomOffset="-40%" topOffset="40%">{children}</Waypoint>;
    }
}