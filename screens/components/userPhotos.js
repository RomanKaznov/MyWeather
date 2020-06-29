import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import {  Modal }  from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';




const images =  [ {
    // Simplest usage.
    url: 'https://images.wallpaperscraft.ru/image/gory_skaly_vershiny_174409_300x168.jpg',
     width: 250,
     height: 100,
},
 {
    url: 'https://images.wallpaperscraft.ru/image/skaly_poberezhe_more_174397_300x168.jpg',
     width: 250,
     height: 150,
},
 {
    url: 'https://images.wallpaperscraft.ru/image/zdaniia_fasad_vid_snizu_174410_300x168.jpg',
     width: 250,
     height: 150,
},
]




//компонент отвечает за показ фото
const UserPhotos = ({icon,value}) => {

return (

<View style = {styles.container}>
  <Text style={styles.textStyle}>ФОТОГРАФИИ</Text>
  <ImageViewer backgroundColor = {'#ffff'}   enablePreload={true}  imageUrls= {images} / >
</View>


  );
};

const styles = StyleSheet.create({


  container: {
    marginTop:50,
    width:'100%',
    height:'40%',
  },

  textStyle: {
    marginLeft:10,
    backgroundColor:'#ffff',
    color:'#648FC9',

  }




})
export default UserPhotos
