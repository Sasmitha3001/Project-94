import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../Components/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class ScheduledClasses extends Component {
  constructor(){
    super()
    this.state={
      allClasses:[]
    }
  }

  render(){
    return (
      <SafeAreaProvider>
        <ScrollView>
        <View  style={styles.container}>
        <MyHeader title={"Scheduled Classes"}/>
        <Text>List of All Scheduled Classes</Text>

        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{this.props.navigation.navigate('AddClass')}}
        >
        <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaProvider>
      
    )
  }
  
}

const styles=StyleSheet.create({
  container:{
    flex:1,
   justifyContent:'center'
  },
  button:{
    backgroundColor:'#3c1361',
    borderRadius:100,
    width:50,
    height:50,
    alignSelf:'flex-end',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:8
    },
    shadowOpacity:0.30,
    shadowRadius:10.32,
    elevation:16,
    padding:10
  },
  buttonText:{
    color:'white',
    alignSelf:'center',
    fontSize:25,
    textAlign:'center',
    paddingBottom:30
  }
})

