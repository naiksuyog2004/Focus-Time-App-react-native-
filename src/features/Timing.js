import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RoundedButton} from '../components/RoundedButton'
export const Timing = ({onChangeTime}) =>{
  return (
    <>
      <View style = {styles.timingButton}>
        <RoundedButton onPress ={() => onChangeTime(10)} title = '10' size = {75}/>
      </View>
      <View style = {styles.timingButton}>
        <RoundedButton onPress ={() => onChangeTime(20)} title = '20' size = {75}/>
      </View>
      <View style = {styles.timingButton}>
        <RoundedButton onPress ={() => onChangeTime(30)} title = '30' size = {75}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton:{
    flex:1,
    alignItems:'center',
  }
})