import React, { Component } from 'react';
import ky from 'ky';
import apiEndpoint from './utils/api-endpoint';

export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackInfo: {
                trackName: '',
                trackURL: '',
                artistName: '',
                artistURL: '',
                albumName: '',
                albumArtworkURL: ''
            }
        };
    }

    componentDidMount() {
        const refreshTrackInfo = () => {
            ky.get(`${apiEndpoint}/api/activity/spotify`)
                .then(async response => {
                    const trackInfo = await response.json();
                    this.setState({trackInfo});
                    console.log('track info:', trackInfo);
                });

            setTimeout(refreshTrackInfo, 30000);
        }
        refreshTrackInfo();
    }

    render() {
        const {trackInfo} = this.state;
        return (
            <section id="activity">
                <div className="row">
                    <div className="three columns header-col">
                        <h1><span>Activity</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <h2 className="spotify header">Currently listening to</h2>
                        <div className="spotify container">
                            {!trackInfo.trackName && <div>Nothing</div>}
                            <div className="spotify artwork">
                                <img src={trackInfo.albumArtworkURL} alt={trackInfo.albumName}/>
                            </div>
                            <div className="spotify info">
                                <div className="spotify trackName"><a href={trackInfo.trackURL}>{trackInfo.trackName}</a></div>
                                <div className="spotify artistName"><a href={trackInfo.artistURL}>{trackInfo.artistName}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}