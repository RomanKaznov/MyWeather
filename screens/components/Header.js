import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

//Этот компонент отрисовывает шапку профиля
const Header = () => {
  return (
<>
<View style = {styles.container}>
    <View style = {styles.containerUserPhoto}>
      <Image
      style={styles.userPhoto}
      source={require('../assets/userphoto.jpg')}
    />
   </View>
    <View  style = {styles.containerUserStatus }>
      <Text style = {styles.userName }>Имя пользователя</Text>
      <Text style = {styles.status } >Расскажите о себе</Text>
      <Text style = {styles.statusOnline}>Online</Text>
    </View>

</View>
  </>
  );
};

const styles = StyleSheet.create({


container: {
  width:'100%',
  height:'25%',
  flexDirection: 'row',
  backgroundColor:'#ffff'


},

containerUserPhoto: {
  width:100,
  marginLeft:20,
  justifyContent: 'center',

},

    userPhoto: {
      width:90,
      height:90,
      borderRadius:60,
  },


containerUserStatus: {
  marginLeft:10,
  paddingTop:'8%',

},

userName: {
  fontWeight:"bold",
  fontSize:17,
},

status : {
  color:'#648FC9',
  paddingTop:5,
},

statusOnline : {
  paddingTop:5,
}

})
export default Header
