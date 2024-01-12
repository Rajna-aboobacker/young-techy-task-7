import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
// import { TouchableOpacity } from 'react-native-web';
   

const Login = ({}) => {
  const navigation = useNavigation(); 
  

  return (
    <LinearGradient
    colors={['#FEAC5E', '#C779D0', '#4BC0C8']}
    style={{flex: 1,}}
  >
    <View style={{
        flex:1,
        // backgroundColor:"pink",
        justifyContent:"center",
        alignItems:"center"
    }}>
   
     <TouchableOpacity onPress={() => navigation.navigate('home')}
     style={{
        height:40,
        width:150,
        borderRadius:12,
        backgroundColor:"blue",
        borderColor:"white",
       

      }}>
        <Text style={{fontSize:20,color:"white",textAlign:"center",alignContent:"center"}}>Login</Text>
      </TouchableOpacity>
      
    </View>
   </LinearGradient> 
  )
}

export default Login

const styles = StyleSheet.create({})