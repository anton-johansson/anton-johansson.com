import {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

interface EmailData {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

const transport = (() => {
  if (process.env.GMAIL_ADDRESS && process.env.GMAIL_PASSWORD) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
  }

  return null;
})();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validate = (body: any): body is EmailData => {
  return (
    typeof body.name === 'string' &&
    Boolean(body.name) &&
    typeof body.email === 'string' &&
    Boolean(body.email) &&
    typeof body.message === 'string' &&
    Boolean(body.message)
  );
};

/**
 * API route that sends a contact message to my private email.
 *
 * @param req The request information.
 * @param res The response information.
 */
// eslint-disable-next-line react-memo/require-memo
const SendMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!transport) {
    console.log('send-message.ts: No email transport is configured...');
    res.writeHead(400);
    res.end();
    return;
  }

  if (!validate(req.body)) {
    console.log('send-message.ts: Bad email input data...');
    res.writeHead(400);
    res.end();
    return;
  }

  const mail: nodemailer.SendMailOptions = {
    from: `${req.body.name} <${req.body.email}>`,
    replyTo: `${req.body.name} <${req.body.email}>`,
    to: `Anton Johansson <${process.env.GMAIL_ADDRESS}>`,
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
  };

  const result = await transport.sendMail(mail);
  if (!result.accepted) {
    console.log('send-message.ts: Mail could not be sent...');
    res.writeHead(400);
    res.end();
    return;
  }

  console.log('send-message.ts: Mail successsfully sent!');
  res.writeHead(200);
  res.end();
};

export default SendMessage;
