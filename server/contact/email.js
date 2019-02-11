const nodemailer = require('nodemailer');

const transport = (() => {
    if (process.env.GMAIL_PASSWORD) {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'antoon.johansson@gmail.com',
                pass: process.env.GMAIL_PASSWORD
            }
        });
    }
})();

module.exports = (name, emailAddress, message) => {
    if (transport) {
        const mail = {
            from: `${name} <${emailAddress}>`,
            replyTo: `${name} <${emailAddress}>`,
            to: 'Anton Johansson <antoon.johansson@gmail.com>',
            subject: `Message from ${name}`,
            text: message
        };

        transport.sendMail(mail, (error, info) => {
            if (error) {
                console.log('Error occurred when sending email', error);
                return;
            }

            console.log('Sent email', info.response);
        });
    } else {
        console.log('No Gmail password set');
    }
};
