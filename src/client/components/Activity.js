import React, {Component} from 'react';
import SectionWaypoint from './utils/SectionWaypoint';
import ky from 'ky/umd';
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
            },
            steamInfo: {
                gameTitle: '',
                artworkURL: ''
            }
        };
    }

    componentDidMount() {
        const refreshTrackInfo = () => {
            ky.get(`${apiEndpoint}/api/activity`)
                .then(async response => {
                    const {trackInfo, steamInfo} = await response.json();
                    this.setState({trackInfo, steamInfo});
                });

            setTimeout(refreshTrackInfo, 30000);
        }
        refreshTrackInfo();
    }

    render() {
        const {translate, onScroll} = this.props;
        const {trackInfo, steamInfo} = this.state;
        return (
            <SectionWaypoint sectionName="activity" onScroll={onScroll}>
                <section id="activity">
                    <div className="row">
                        <div className="three columns header-col">
                            <h1><span>{translate('activity.title')}</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <h3>{translate('activity.spotify.currently-listening-to')}</h3>
                            <div className="spotify">
                                {!trackInfo.trackName && <div>{translate('activity.spotify.not-playing')}</div>}
                                {trackInfo.trackName &&
                                    <div>
                                        <div className="artwork">
                                            <img src={trackInfo.albumArtworkURL} alt={trackInfo.albumName}/>
                                        </div>
                                        <div className="info">
                                            <div className="spotify trackName"><a href={trackInfo.trackURL}>{trackInfo.trackName}</a></div>
                                            <div className="spotify artistName"><a href={trackInfo.artistURL}>{trackInfo.artistName}</a></div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="nine columns main-col">
                            <h3>{translate('activity.steam.currently-playing')}</h3>
                            <div className="steam">
                                {!steamInfo.gameTitle && <div>{translate('activity.steam.not-playing')}</div>}
                                {steamInfo.gameTitle &&
                                    <div>
                                        <div>
                                            <div className="steam gameTitle">{steamInfo.gameTitle}</div>
                                        </div>
                                        <div>
                                            <img className="artwork" src={steamInfo.artworkURL} alt={steamInfo.gameTitle}/>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </SectionWaypoint>
        );
    }
}
