const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=0f1e2791f6f2edfc4fded5054d03ce63&units=metric`)

    //solo la temperatura necesito
    return resp.data.main.temp;
}

module.exports = {
    getClima
}