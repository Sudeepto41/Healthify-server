import React, { useState } from 'react';
import { StyleSheet, Text, View, _View } from 'react-native';
import * as Fonts from 'expo-font'
import { AppLoading } from 'expo'

import Intro from './app/screens/intro'


const getFonts = () => {
    return Fonts.loadAsync({
        'nunito-ExtraLight': require('./app/assets/fonts/NunitoSans-ExtraLight.ttf'),
        'nunito-Light': require('./app/assets/fonts/NunitoSans-Light.ttf'),
        'nunito-regular': require('./app/assets/fonts/NunitoSans-Regular.ttf'),
        'nunito-SemiBold': require('./app/assets/fonts/NunitoSans-SemiBold.ttf'),
        'nunito-Bold': require('./app/assets/fonts/NunitoSans-Bold.ttf'),
        'nunito-ExtraBold': require('./app/assets/fonts/NunitoSans-ExtraBold.ttf'),
        'nunito-Black': require('./app/assets/fonts/NunitoSans-Black.ttf')
    });
}
export default function App() {
    const [fontsLoaded, setfontsLoaded] = useState(false)

    if (fontsLoaded) {
        return (
            <Intro />
        )

    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setfontsLoaded(true)}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
