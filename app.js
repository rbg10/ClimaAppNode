const {getCoordsCity, getWeatherCity}= require('./data/cities');


const argv= require('yargs').options({
    direccion:{
        alias:'d',
        desc: 'Direccion de la ciudad',
        demand:true
    }
}).argv;




// getCoordsCity(argv.direccion).then(console.log)


const getInfo = async (direccion) =>{

    try {
        const coords= await getCoordsCity(direccion);
        const temp  = await getWeatherCity(coords.lat, coords.lng);
        return `El clima de ${temp.name} es de ${temp.main.temp} C`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(argv.direccion).then(console.log);

// getWeatherCity(48.85,2.35).then(console.log);

