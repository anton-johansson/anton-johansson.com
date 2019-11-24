const express = require('express');
const rateLimit = require('express-rate-limit');
const parser = require('body-parser');
const {sendContactMessage} = require('./contact');
const {spotify, steam} = require('./activity');
import renderer from './renderer';

const app = express();
const port = process.env.PORT || 4000;

const rateLimiter = (minutes, numberOfRequests) => rateLimit({
    windowMs: 1000 * 60 * minutes,
    max: numberOfRequests
});

app.use(express.static('public'));
app.use(express.static('static'));

app.use('/api/', parser.json());
app.use('/api/', (_, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/api/send-contact-message', rateLimiter(10, 2), (request, response) => {
    const {name, emailAddress, message} = request.body;
    if (!name || !emailAddress || !message) {
        response.status(400).send({
            errorCode: 'contact.form.fields-missing'
        });
        return;
    }
    sendContactMessage(name, emailAddress, message);
    response.sendStatus(200);
});

app.get('/api/activity', (_, response) => {
    const trackInfo = spotify.getTrackInfo();
    const steamInfo = steam.getSteamInfo();
    response.send({trackInfo, steamInfo});
});

app.get('/', (request, response) => {
    const body = renderer()
    response.send(body);
});

spotify.initiateJob();
steam.initiateJob();

app.listen(port, () => console.log(`Listening on port ${port}`));
