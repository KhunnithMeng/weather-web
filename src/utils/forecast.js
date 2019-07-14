const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d02c9236189daa281fa26a07a4254e2d/'+ encodeURIComponent(latitude) +','+ encodeURIComponent(longitude) +''

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. Temperature hight is '+ body.daily.data[0].temperatureHigh +' temperature low is '+ body.daily.data[0].temperatureLow +'There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast