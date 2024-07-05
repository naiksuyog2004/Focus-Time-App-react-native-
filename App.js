import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setcurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setcurrentSubject} />
          <FocusHistory history={history} />
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Focus 🎯</Text>
          </View>
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimeEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setcurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight - 12 : 0,
    backgroundColor: colors.darkBlue,
  },
  imagecontainer: {
    flex: 1, // Ensures the container takes up the full screen
    justifyContent: 'center',

  },
  image: {
    textAlign: 'center',
    fontSize: 60,
    color: 'orange',
    fontWeight: 'bold',

  },
});
