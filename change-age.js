
const https = require('https');
// Define the request options
const options = {
  hostname: 'apis.roblox.com',
  path: '/age-verification-service/v1/persona-id-verification/start-verification',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Csrf-Token': 'Enter your X-Csrf-Token here ',
    'Cookie': "Enter your cookie here:3 "
  },
};

// Make the request
const req = https.request(options, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
});

req.on('error', error => {
  console.error('Request error:', error);
});

const body = JSON.stringify({ generateLink: true });
req.write(body);
req.end();
