import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Splash = () => {
   
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 3000);
  }, [])
  return (
<View style={{
  flex:1,
  backgroundColor:"pink",
  justifyContent:"center"
}}>
<Text style={{
  justifyContent:"center",
  textAlign:"center",
  color:"red",
  fontSize:45,
  fontWeight:"bold"
}}>Splash</Text>
</View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})


