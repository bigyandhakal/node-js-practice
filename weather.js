// Weather API using package axios and open source weather url LINK

const axios = require('axios');
const moment = require('moment');

async function getWeatherData(){
    try{
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
        );
        const { data } = response;
        const currentDateAndTime = new Date().toISOString();
        
        const { hourly } = data;

        

        console.log(currentDateAndTime);
        const { daily } = data;
        const { sunrise, sunset } = daily;
       
        console.log(sunrise, sunset)



    } catch (error){
        console.error(error);
    }
}

getWeatherData();