import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './src/components/login';
// import home from './src/components/home';
// import screenA from './src/components/screenA';
// import screenB from './src/components/screenB';
import Splash from  './src/components/splash';
  


const Stack = createNativeStackNavigator()



const App = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="login" component={Login} />
      {/* <Stack.Screen name="home"  component={Home} />
      <Stack.Screen name="screenA" component={ScreenA} />
      <Stack.Screen name="screenB" component={ScreenB} /> */}
      

    </Stack.Navigator>
  )
}

export default function  ReactNavigation() {
  return <NavigationContainer>{App()}</NavigationContainer>;
}

const styles = StyleSheet.create({})