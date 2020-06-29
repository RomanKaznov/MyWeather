import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import WeatherApi from "./functionalApi/WeatherApi"
import WeatherItem from "./WeatherItem"
import MainColors from "../assets/MainColors"


//Компонент отвечает за вывод погоды
class Wether extends Component{
  constructor(props){
    super(props);
    this.state = {
      nameCity:null,
      temp: null,
      min_temp: null,
      max_temp: null,
      wather: null,
      pressure: null,
      humidity: null,
      wind: null,
      visibility: null,
    }
  }


renderWeather(){
  let weather;
  if(this.state.temp!=null){
    weather =
  <View style={styles.wrapper}>
      <Text style={styles.header}>{this.state.nameCity}</Text>
    <View style = {styles.container}>
      <WeatherItem  nameItem="Температура" value ={this.state.temp}/>
      <WeatherItem  nameItem="В тени"  value ={this.state.min_temp}/>
      <WeatherItem  nameItem="На солнце" value ={this.state.max_temp}/>
    </View>
    <View style = {styles.container}>
      <WeatherItem nameItem="Погода" value ={this.state.wather}/>
      <WeatherItem nameItem="Давление" value ={this.state.pressure}/>
      <WeatherItem nameItem="Влажность" value ={this.state.humidity}/>
    </View>
    <View style = {styles.container}>
      <WeatherItem nameItem="Ветер" value ={this.state.wind}/>
      <WeatherItem nameItem="Видимость" value ={this.state.visibility}/>
    </View>
  </View>
  }
  return weather;
}


  render(){
    return(
      <>
    <View style={styles.navBar}>
      <TouchableOpacity onPress = {() => {
            WeatherApi.getWeather(this.props.city).then((json) => {
              this.setState({
                nameCity: this.props.city,
                temp: json.main.temp + ' c',
                min_temp: json.main.temp_min+ ' c',
                max_temp: json.main.temp_max+ ' c',
                wather: json.weather[0].main,
                pressure: json.main.pressure,
                humidity: json.main.humidity + '%',
                wind: json.wind.speed + ' m/s',
                visibility: json.visibility + ' m' ,
              })
            });

          }}  style = {styles.button}>

          <Text style = {styles.buttonText}>Поиск</Text>
      </TouchableOpacity>

                    {this.props.buttonNext}
    </View>

                    {this.renderWeather()}
      </>
    )
  }
}


const styles = StyleSheet.create({
wrapper: {
  width:'100%',
  height:'100%',
  alignItems:'center',
  backgroundColor:MainColors.BACKGROUND_WRAPPER
  },

header: {
  width:'100%',
  height:'10%',
  marginTop:15,
  textAlign:'center',
  fontSize:20,
  fontWeight:'bold'
},

navBar: {
  width:'100%',
  justifyContent:'center',
  flexDirection:'row',
  height:60
},

button: {
  width:'25%',
  margin:10,
  paddingHorizontal:11,
  paddingVertical:8,
  borderRadius:20,
  backgroundColor:MainColors.BACKGROUND_BUTTON,
},

buttonText: {
  textAlign:'center',
},


container: {
  width:'95%',
  height:'20%',
  justifyContent:'center',
  flexDirection:'row',
  borderBottomWidth:1,
  borderColor:MainColors.COLOR_BORDER,
}

})

export default Wether
