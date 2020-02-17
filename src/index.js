const express = require('express');
const rateLimit = require('express-rate-limit');
const parser = require('body-parser');
const {sendContactMessage} = require('./contact');
const {spotify, steam} = require('./activity');
import renderer from './renderer';
import { getRequestURL, START_DATE } from './utils';

const app = express();
const port = process.env.PORT || 4000;
const disableCrawling = 'disabled' === process.env.CRAWLING;

const rateLimiter = (minutes, numberOfRequests) => rateLimit({
    windowMs: 1000 * 60 * minutes,
    max: numberOfRequests
});

app.disable('x-powered-by');
app.use('/public/', express.static('public'));
app.use('/api/', parser.json());

app.get('/robots.txt', (request, response) => {
    if (disableCrawling) {
        response.send(`User-agent: *
Disallow: /`);
    } else {
        response.send(`Sitemap: ${getRequestURL(request, {appendPath: false})}/sitemap.xml`);
    }
});
app.get('/sitemap.xml', (request, response) => {
    response.type('text/xml');
    response.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${getRequestURL(request, {appendPath: false})}/</loc>
        <lastmod>${START_DATE}</lastmod>
    </url>
</urlset>`);
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
    const body = renderer(request);
    response.send(body);
});

spotify.initiateJob();
steam.initiateJob();

app.listen(port, () => console.log(`Listening on port ${port}`));
