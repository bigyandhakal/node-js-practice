// Weather API using package axios and open source weather url LINK

const axios = require("axios");
const moment = require("moment");

async function getWeatherData() {
  try {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
    );
    const { data } = response;
    
    const currentDateAndTime = new Date().toISOString();

    const { hourly } = data;

    const { time } = hourly;
    const { temperature_2m } = hourly;

    const dateTime = time[10]
    const temp = temperature_2m[10]

    console.log(dateTime, temp)

    const { daily } = data;

    const { sunrise, sunset } = daily;

    const sr = moment(sunrise.toString()).format('LLLL')
    const ss = moment(sunset.toString()).format('LLLL')

    console.log(sr, ss)
  } catch (error) {
    console.error(error);
  }
}

getWeatherData();
