import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const screenA = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor:"pink",
        justifyContent:"center",
        alignItems:"center"
    }}>
     <LinearGradient
    colors={['#70e1f5','#ffd194' ]}
    style={{ height:"100%",
        width:"100%",
        borderRadius:"50%", justifyContent:"center",
      
      alignItems:"center",}}
  >
      <View style={{
        // height:"100%",
        // width:"100%",
        // borderRadius:"50%",
        // backgroundColor:"violet",
        // justifyContent:"center",
      
        // alignItems:"center",
      }}>
        <Text style={{
          color:"red",
          fontSize:35,
          fontWeight:"bold",
          fontStyle:"italic"
        }}>Asli Amina</Text>
        
      </View>
      </LinearGradient>
    </View>
  )
}

export default screenA

const styles = StyleSheet.create({})