// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

const accountSid = 'AC4b90367492998d1a59ab90954c045d98';
const authToken = '496292ee849655f56f2d6a1bdd2e1cac';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+919027504141',
         from: '+19369096437'
       })
      .then(call => console.log(call.sid));
