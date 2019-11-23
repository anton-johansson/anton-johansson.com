const got = require('got');

const EMPTY = {
    gameTitle: '',
    artworkURL: ''
};

const steamApiKey = process.env.STEAM_API_KEY;

let steamInfo = EMPTY;

const getSteamInfo = () => {
    return steamInfo;
}

const getInfoFromSteamAPI = async () => {
    const response = await got(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=76561198067562947`, {json: true});
    const playerInfo = response.body.response.players[0] || {};

    if (!playerInfo.gameid) {
        steamInfo = EMPTY;
    } else {
        const info = {
            gameTitle: playerInfo.gameextrainfo,
            artworkURL: `https://steamcdn-a.akamaihd.net/steam/apps/${playerInfo.gameid}/header.jpg`
        };
        steamInfo = info;
    }

    setTimeout(getInfoFromSteamAPI, 60000);
};

const initiateJob = () => {
    if (steamApiKey) {
        console.log('Initializing Steam job');
        getInfoFromSteamAPI();
    } else {
        console.log('No Steam API key');
    }
};

module.exports = {
    getSteamInfo,
    initiateJob
};
