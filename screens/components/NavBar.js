
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import ItemIcon from './navBarComp/itemIcon'
import NavItem from './navBarComp/navItem'


//этот компонент отрисует навигацию,состоящую из двух частей
const NavBar = () => {
  return (
<>

<View style = {styles.container}>

  <TouchableOpacity style = {styles.buttonStyle}><Text style = {styles.textButton}>Редактировать</Text></TouchableOpacity>

<View style = {styles.containerUp}>
<ItemIcon uriPhoto = "https://cdn.icon-icons.com/icons2/753/PNG/512/photo-camera-1_icon-icons.com_63898.png" nameItem = "История"/>
<ItemIcon uriPhoto = "https://cdn.icon-icons.com/icons2/1744/PNG/512/3643749-edit-pen-pencil-write-writing_113397.png" nameItem = "Запись"/>
<ItemIcon uriPhoto = "https://cdn.icon-icons.com/icons2/1993/PNG/512/frame_gallery_image_images_photo_picture_pictures_icon_123209.png" nameItem = "Фото"/>
<ItemIcon uriPhoto = "https://cdn.icon-icons.com/icons2/949/PNG/512/photo-and-video-camera-outline-on-a-tripod_icon-icons.com_74108.png" nameItem = "Трансляция"/>
</View>

<View style = {styles.containerDown}>
<NavItem value="Укажите место учебы" icon = "https://cdn.icon-icons.com/icons2/259/PNG/128/ic_school_128_28729.png"/>
<NavItem value="Укажите место работы" icon = "https://cdn.icon-icons.com/icons2/670/PNG/512/hand_tool_tools_work_building_repair_construction_construction_tools-55_icon-icons.com_60393.png"/>
<NavItem value="Подробная информация" icon = "https://cdn.icon-icons.com/icons2/933/PNG/512/ellipsis_icon-icons.com_72770.png"/>
</View>

</View>

  </>
  );
};

const styles = StyleSheet.create({


container: {
  width:'100%',
  height:'36%',
  alignItems:'center',
  backgroundColor:'#ffff'

},

containerDown: {
  width:'100%',
  height:'60%',
  borderBottomWidth:1,
  borderColor:'#DDDDDD',
  backgroundColor:'#ffff'
},

buttonStyle: {
  width:'90%',
  height:'20%',
  borderRadius:5,
  backgroundColor:'#E5EBF1',
},
    textButton: {
    textAlign:'center',
    paddingVertical:6,
    color:'#648FC9',
    fontWeight:"bold",
    },

containerUp:{
  marginTop:15,
  width:'95%',
  height:'30%',
  flexDirection:'row',
  borderBottomWidth:1,
  borderColor:'#DDDDDD',
  //backgroundColor:'#4334',

}




})
export default NavBar
