const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
        .options({
            a: {
                demand: true,
                alias: 'address',
                describe: 'Address to fech weather for',
                string: true
            }
        })
        .help()
        .argv;

geocode.geoCodeAddress(argv.address, (errorMessage, result) => {
    if(errorMessage) {
        console.log('Error Meassage :::'+errorMessage);
    } else {
        console.log('Address ::::'+result.address);
        weather.getWeather(result.latitude, result.longitude, (errorMessage, weatherResults) => {
            if(errorMessage) {
                console.log('weather result not available');
            } else {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.summary}`);
            }
        });
    }
});


