const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    //const url = 'http://api.weatherstack.com/current?access_key=59fa08b03de4b34fd27ea1246dc23e2f&query=1.2903,103.852' 
    //const url = 'http://api.weatherstack.com/current?access_key=59fa08b03de4b34fd27ea1246dc23e2f&query=37.826,-122.4233'
    const url = 'http://api.weatherstack.com/current?access_key=59fa08b03de4b34fd27ea1246dc23e2f&query=' + latitude + ',' + longitude
    console.log('forecast: ' + url)
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // response is a serialized JSON object string, it contains a "body" section, so you can parse it directly. 
            //const data = JSON.parse(response.body)
            // alternatively, use the json:true option, it will parse the response upon receiving the response, and you can use it 
            // as an object without parsing
            const data = body.current
            const temp = data.temperature
            const tempFeel = data.feelslike
            const weatherDesc = data.weather_descriptions[0]
            callback(undefined, weatherDesc + ', it is ' + temp + ' degrees out there, and feels like ' + tempFeel + ' degrees.')
        }
    })
}

module.exports = forecast
