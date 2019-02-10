const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('/api/test', (request, response) => {
    response.send({anton: 'hej'});
});
app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port ${port}`));
