/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Header from './components/Header'
import NavBar  from './components/NavBar'
import UserPhotos  from './components/userPhotos'
import {

RefreshControl,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';


function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export default function VkPadge() {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, [refreshing]);


  return (

    <SafeAreaView style={styles.wrapper}>
    <ScrollView
     refreshControl={
       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
     }
   >
    <Header/>
    <NavBar/>
    <UserPhotos icon = "https://images.wallpaperscraft.ru/image/holmy_trava_vershiny_174406_300x168.jpg"/>

  </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper:{
    height:'100%',
    backgroundColor:'#ffff'
  }
});
