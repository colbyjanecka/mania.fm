// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
var thisBody = "no number";

function sendWhatsApp(body, callback) {
  client.messages
  .create({ from: "+18555266428",
            to: "+12547222179", 
            body })
  .then((message) => {
    console.log(
      `SMS message sent from ${from} to ${to}. Message SID: ${message.sid}`
    );
  })
  .catch((error) => {
    console.error(error);
  });
}

module.exports = sendWhatsApp;