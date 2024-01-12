import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function ScreenA() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"red"
    }}>
      <Text style={{fontSize:18,fontWeight:"900",color:"white",fontStyle:"italic"}}>screenA</Text>
    </View>
  );
} 

function ScreenB() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"blue" }}>
      <Text style={{fontSize:18,fontWeight:"900",color:"white",fontStyle:"italic"}}>ScreenB</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Home() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="screenA" component={ScreenA} />
        <Tab.Screen name="screenB" component={ScreenB} />
      </Tab.Navigator>
   
  );
}

export default Home;
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
