import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import {Timer} from './src/features/Timer'

export default function App() {
  const [currentSubject, setcurrentSubject] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      
      
      {!currentSubject ? (<Focus addSubject={setcurrentSubject} />) :
      (<Timer 
        focusSubject = {currentSubject}
        onTimeChange = {() => {}}
        clearSubject = {() => {}}
      />
      
      )}


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
