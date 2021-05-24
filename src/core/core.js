const fetch = require("node-fetch");

const SmartConsumerCore = {

    getWeather(locationName){
        fetch("http://api.openweathermap.org/data/2.5/weather?appid=cfe72599279e93c9239e58f6c82b29ab&q=" + locationName)
        .then(response => response.text())
        .then(data => {
            let json = JSON.parse(data);
            console.log(json.weather[0].main);
        });
    },

    getTemperature(locationName){
        fetch("http://api.openweathermap.org/data/2.5/weather?appid=cfe72599279e93c9239e58f6c82b29ab&q=" + locationName)
        .then(response => response.text())
        .then(data => {
            let json = JSON.parse(data);
            console.log(parseFloat(json.main.temp - 273).toFixed());
        });
    },

    getWaterAvailability(locationName){
        fetch("https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?format=json&size=1&nom_commune=" + locationName)
        .then(response => response.text())
        .then(data => {
            let json = JSON.parse(data);
            console.log(json.data[0].libelle_qualification_volume);
        });
    }

}

module.exports = SmartConsumerCore;