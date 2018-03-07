const request = require('request');

let getWeather = (lat, lng, callback) => {

request({
  url: `https://api.darksky.net/forecast/e20e7caab79cbd9042c30c263bcfd1e2/${lat},${lng}`,
  json: true
}, (error, response, body) => {
 if (!error && response.statusCode === 200) {
    callback(undefined, body.currently);
  } else {
    callback('Unable to fetch weather.');
  }
});
};

module.exports.getWeather = getWeather;