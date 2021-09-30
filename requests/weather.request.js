const rp = require('request-promise')

module.exports = async function (city='') {
    if (!city) {
        throw new Error('city not found')

    }

    const KEY = '1eba098121314bb3b56966393167697a'

    const url = 'https://api.openweathermap.org/data/2.5/weather'

    // const degrees = 

    const options = {
        uri: url,
        qs:{
            appID: KEY,
            q: city
        },
        units: 'imperial',
        json: true,
        async: true

    }
    
    try {
        const data = await rp(options)
        return{
             weather: `temperature: ${data.name}: ${Math.ceil(data.main.temp - 273.15)} °C
                       ( feels like: ${Math.ceil(data.main.feels_like - 273.15)} °C )`,
             error:null
        }
    } catch (error) {
        return{
            weather: null,
            error: error.error.message
        }
        
    }
}