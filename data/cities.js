const axios= require('axios');


const getCoordsCity= async (city)=>{
    const encodedParamCity=encodeURI(city);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedParamCity}&appid=0009edbef941d97ee2cb88c67e7b0657`,
        timeout: 1000,

    });

    const resp= await instance.get();
    if(resp.data.cod!==200){
        throw new Error (`No hay resultado para la ciudad ${city}`);
    }

    const direccion= resp.data.name;
    const lat      = resp.data.coord.lat;
    const lng      = resp.data.coord.lon;


    return {
        direccion,
        lat,
        lng
    }

}

const getWeatherCity = async (lat,lon) =>{

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0009edbef941d97ee2cb88c67e7b0657&units=metric`,
        timeout: 1000,
    });

    const resp= await instance.get();

    return resp.data;

}




module.exports={
    getCoordsCity,
    getWeatherCity
}




