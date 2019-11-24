const email = require('./email');

const sendContactMessage = (name, emailAddress, message) => {
    console.log(`Sending message to ${name} (${emailAddress}): ${message}`);
    email(name, emailAddress, message);
};

module.exports = {sendContactMessage}
