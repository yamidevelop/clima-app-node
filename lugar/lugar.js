const axios = require('axios');

const getLugarLatLng = async(dir) => {

    //si la entrada tiene caracteres especiales como espacios ej. New York, lo convierte a New%20York para que lo lea bien en la
    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': '25f9e3e6famsh797b8566b8fe923p1126b7jsn3a5fa9cb3fe4' }
    });

    //funcion como promesa
    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //         //status: 200 --- correcto
    //         //status: 404 ---- no encontró URL
    //         //status: 500 ---- error del servidor
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!', err);
    //     });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}