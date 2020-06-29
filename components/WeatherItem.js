import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import MainColors from "../assets/MainColors"

const WeatherItem = (props) => {

function getValueWeather(weatherApi) {
 let res = '';
   switch (weatherApi) {
     case 'Clear':
        res = 'Ясно'
     break;
     case 'Clouds':
        res = 'Облачно'
     break;
     case 'Party cloudy':
        res = 'Переменная облачность'
     break;
     case 'broken clouds':
        res = 'Облачно'
     break;
     case 'rain':
        res = 'Дождь'
     break;
     case 'snow':
        res = 'Снег'
     break;
     case 'sleet':
        res = 'Снег с дождем'
     break;
     case 'thunder':
        res = 'Гроза'
     break;
     case 'fog':
        res = 'Туман'
     break;
     default:
      res = weatherApi
}

   return res;
 }



  return(
  <>
  <View style = {styles.container}>
    <Text >{props.nameItem}</Text>
    <Text style= {styles.textStyle}>{getValueWeather(props.value)}</Text>
  </View>
  </>
)

}


const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent: 'center',
    marginLeft:20,
    marginRight:20,
  },

  textStyle: {
    color:MainColors.COLOR_TEXT,
  }
})


export default  WeatherItem
