import { View, Text,StyleSheet,ImageBackground,Pressable } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import ice from "@/assets/images/english-countryside-1.webp";


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ice}
      resizeMode='cover'
      style={styles.image}
      >
      <Text style={styles.title}>Coffee Shop</Text>
      
      <Link href="/menu" style={{marginHorizontal:'auto'}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}> Our Menu</Text>
      </Pressable>
      </Link>

      <Link href="/contact" style={{marginHorizontal:'auto'}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}> contact us</Text>
      </Pressable>
     
      </Link>
      
      </ImageBackground>
     
    </View>
  )
}
 
export default app
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 3,
    flexDirection: 'column',
  },
    title: {
    color: 'white',
    fontSize: 42,
    fontWeight: '900',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginBottom: 120,

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    padding:3,
  

  },
  button:{

    height: 60,
    width:150,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    padding:6,
    marginBottom:50,
  },
  image: {
   height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover', 
  },
  })   