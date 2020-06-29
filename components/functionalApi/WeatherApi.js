import React, {Component} from 'react';



const API_KEY = '7ed95b68f202b92a1fd735e414cbe455';

export default  {

async getWeather(nameCity) {
  try {
    let city =nameCity.toString().replace(/\s+/g, ' ').trim();//уберем пробелы
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+city+`&appid=${API_KEY}&units=metric`);
    const jsonWeather = await api.json();
    return jsonWeather
  } catch ( error ){
    console.log(error)
    }
}



}
