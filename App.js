/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import OutputWeather from './components/OutputWeather';
import MainColors from "./assets/MainColors"
import VkPadge from './screens/Vk'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function HomeScreen({ navigation }){

  const [city,setText] = useState('')
  const getCity = (text) => {
    setTranslateText(text)
  }


  let buttonNext = <TouchableOpacity onPress={() => navigation.navigate('id userId')} style = {styles.button} >
                      <Text o style = {styles.buttonText}>Vk Padge</Text>
                  </TouchableOpacity>

  return (
    <>
    <View style = {styles.wrapper}>
      <TextInput placeholder={'Город...'}     multiline = {true}
      onChangeText = {setText}   style = {styles.InputText}/>
    </View>
    <OutputWeather buttonNext = {buttonNext} fun = {getCity} city = {city}  />
    </>
  );
}


function DetailsScreen(){
  return (
  <VkPadge/>
  );
}

export default function App(){
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="id userId" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )

}


const styles = StyleSheet.create({

wrapper:{
    width:'100%',
    alignItems:'center',
  },

InputText : {
    width:'55%',
    paddingLeft:10,
    margin:10,
    fontSize:15,
    textAlign: 'left',
    textAlignVertical: "top",
    borderWidth:1.5,
    backgroundColor:MainColors.BACKGROUND_INPUT,
    borderColor: MainColors.BACKGROUND_INPUT_BORDER,
  },

 button:{
   width:'25%',
   margin:10,
   paddingHorizontal:8,
   paddingVertical:8,
   borderRadius:20,
   backgroundColor:MainColors.BACKGROUND_BUTTON,
},

  buttonText:{
    textAlign:'center',
}

});
