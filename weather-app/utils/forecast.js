const request = require("request")

const forecast = (lat,lon,callback)=>{

    url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query='+lat+','+lon+'&units=f'
    
    request({url:url , json:true},(error,response)=>{

        if(error){
            callback('unable to connect weather service',error)
        }else if (response.body.error){
            callback('unable to find data',response.body.error)
        }
        else{
            callback(undefined,response.body.current.weather_descriptions)
        }

    })

}

module.exports = forecast