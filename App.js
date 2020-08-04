import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Apploading } from 'expo';
import * as Fonts from 'expo-font';
import intro from './screens/intro'


const getFonts = () => {
  return Fonts.loadAsync({
    'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf')
  })
}

export default function App() {

  const [fontsLoaded, setfontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <intro />
    )
  } else {
    return (
      <Apploading
        startAsync={getFonts()}
        onFinish={() => setfontsLoaded(true)}
      />
    );
  }
}


