import React from 'react';
import {View, StyleSheet,Text,FlatList} from 'react-native';
import {colors} from '../utils/colors'
import {spacing} from '../utils/Sizes'
export const FocusHistory =({history}) =>{

  if (!history || !history.length) return null;

  const renderItem = ({item}) =><Text style = {styles.item}> - {item}</Text>
  return(
    <View style = {styles.container}>
      <Text style= {styles.title}> Things we have focus on</Text>
      <FlatList
        data = {history}
        renderItem = {renderItem}
      />
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: spacing.xxl,
  }
  ,item:{
    color : colors.white,
    fontSize: spacing.lg,
    
  },
  title : {
    color : colors.white,
    fontSize: spacing.lg,
    paddingTop: spacing.lg,
    fontWeight: 'bold',
  }

})
