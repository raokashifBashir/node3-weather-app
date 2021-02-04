const request = require('request')

const forcast = (latitude,longitude, callback) => 
{
    const url = 'http://api.weatherstack.com/current?access_key=13d7e4ef57bcfed648264bc43e72db2a&query=' +latitude +','+ longitude+'&units=f'
    
    request({url : url, json:true}, (error,response) =>{
    
        if (error)
        {
            callback('unable to connect to location services',undefined)
        }else if (response.body.error)
        {
          callback('unable to find Location',undefined)
        }else
        {
            callback(undefined,response.body.current.weather_descriptions + " .It is currently " + response.body.current.temperature
                  + " degrees out. It feels like " + response.body.current.feelslike 
                  + " degrees out. And Current humidity is  " + response.body.current.humidity                  + " ;")
        }
    })
}

module.exports = forcast