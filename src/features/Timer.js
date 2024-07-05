import React, { useState } from 'react';
import { View, StyleSheet, Text ,Platform,Vibration} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import {useKeepAwake} from 'expo-keep-awake';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/Sizes';
import { colors } from '../utils/colors';
import {Timing} from './Timing'
const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject,clearSubject,onTimeEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1)


  const onEnd = (reset) =>{
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset()
    onTimeEnd(focusSubject);
  }
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes = {minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ padding: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View>
        <ProgressBar
          progress = {progress}
          color={colors.progressbar}
          style={styles.progressbar}
        />
      </View>
      <View style={styles.timingbuttons}>
        <Timing onChangeTime = {setMinutes}/>
      </View>
      <View style={styles.buttons}>
        {!isStarted && (
          <RoundedButton
            onPress={() => {
              setIsStarted(true);
            }}
            title="start"
          />
        )}
        {isStarted && (
          <RoundedButton
            onPress={() => {
              setIsStarted(false);
            }}
            title="Pause"
          />
        )}
      </View>
      <View style = {styles.clearButton}>
        <RoundedButton onPress ={clearSubject} title = 'Clear' size = {75}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android'? 30:0,
    
  },
  countdown: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttons: {
    flex: 0.25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
     
  },
  clearButton:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.3,
  }
  ,
  timingbuttons: {
    flex: 0.3,
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
   
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
  },
  progressbar:{
    height: spacing.sm, 
  }
});
