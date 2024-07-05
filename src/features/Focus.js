import React , {useState} from 'react';
import {Text, StyleSheet,View,Platform } from 'react-native';
import {colors} from '../utils/colors'
import { TextInput} from 'react-native-paper'
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utils/Sizes'

export const Focus = ({addSubject}) =>{
  const [subject , setSubject] = useState(null);

  return (
    <View style = {styles.container}>
      <Text style ={styles.text}>Focus Time</Text>
      <View style = {styles.inputDecorator}>
        <TextInput 
        style = {styles.textInput}
          onChangeText = {setSubject}
          label = 'what you like to focus on ?'
        />
        <View style = {styles.button}>
          <RoundedButton  size ={50} title ='+' onPress = {() =>addSubject(subject)}/>
        </View>
      </View>
    </View>
  )
    
}

const styles = StyleSheet.create({
  container:{
    flex:0.3,
  },
  textInput: {
    flex:1,
    marginRight: spacing.md,
  }
  ,
  button:{
   justifyContent: 'center'
  },
  inputDecorator:{
    
    padding: Platform.OS === 'ios'? spacing.lg:0,
    paddingTop: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  }
  ,text: {
    color: '#FD0060',
    textAlign: 'center',
    fontSize: spacing.xxl,
    fontWeight: 'bold',
  }
})