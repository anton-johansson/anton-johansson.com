const got = require('got');

const EMPTY = {
    trackName: '',
    trackURL: '',
    artistName: '',
    artistURL: '',
    albumName: '',
    albumArtworkURL: ''
};

const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

let trackInfo = EMPTY;
let accessToken = '';
let expireDate = Date.now();

const getTrackInfo = () => {
    return trackInfo;
}

const getTrackInfoFromSpotifyAPI = async () => {
    if (!accessToken || Date.now() > expireDate) {
        console.log('Requesting new access token');

        const form = {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: clientId,
            client_secret: clientSecret
        };
        const response = await got.post('https://accounts.spotify.com/api/token', {
            form: true,
            body: form,
            json: true
        });

        accessToken = response.body.access_token;
        expireDate = Date.now() + (response.body.expires_in - 5) * 1000;
        console.log('Generated new access token', accessToken);
    }

    const authorization = 'Bearer ' + accessToken;
    const response = await got('https://api.spotify.com/v1/me/player/currently-playing', {
        json: true,
        headers: {
            'Authorization': authorization
        }
    });

    if (!response.body.is_playing) {
        trackInfo = EMPTY;
    } else {
        const track = response.body.item;
        const albumCover = track.album.images.find(image => image.width == 64) || {url: '/images/unknown-album.png'};
        const info = {
            trackName: track.name,
            trackURL: track.external_urls.spotify,
            artistName: track.artists[0].name,
            artistURL: track.artists[0].external_urls.spotify,
            albumName: track.album.name,
            albumArtworkURL: albumCover.url
        };
        trackInfo = info;
    }

    setTimeout(getTrackInfoFromSpotifyAPI, 60000);
};

const initiateJob = () => {
    if (refreshToken && clientId && clientSecret) {
        getTrackInfoFromSpotifyAPI();
    }
};

module.exports = {
    getTrackInfo,
    initiateJob
};
