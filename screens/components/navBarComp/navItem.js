import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';



// компонент отрисует иконку с текстом
const NavItem = ({icon,value}) => {
return (
<>
<View style = {styles.container}>
  <Image
  style={styles.icon}
  source={{uri : icon.toString()}}
    />
<Text style = {styles.textStyle}>{value.toString()}</Text>


</View>
  </>


  );
};

const styles = StyleSheet.create({


  container: {
    flexDirection:'row',
    marginTop:12,
    marginLeft:20,

  },

  icon: {
    width:20,
    height:20,
    marginRight:10
  },

  textStyle: {
        color:'#648FC9',
  }




})
export default NavItem
