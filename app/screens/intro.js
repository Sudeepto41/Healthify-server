import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';

import color from '../config/color'

export default function Intro() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.BackgroundImage}
                source={require('../assets/image/intro_image.png')}>

                <Text style={styles.Text}>
                    Hi there!{"\n"}
                    We'll be taking care of ur{"\n"}
                    health from now on.
                </Text>

                <Image source={require('../assets/image/nextButton.png')} style={styles.ArrowButton}></Image>
            </ImageBackground>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bg_light,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        position: 'absolute',
        top: Dimensions.get('window').height / 2,
        fontFamily: 'nunito-Black',
        color: '#4B5769',
        fontSize: 20,
        textAlign: 'center',
    },
    BackgroundImage: {
        alignItems: 'center',
        position: 'absolute',
        top: Dimensions.get('window').height / 6.3,     //margin TOP
        height: Dimensions.get('window').height / 2.5,  //HEIGHT
        width: Dimensions.get('window').width           //WIDTH
    },
    ArrowButton: {
        position: 'absolute',
        top: Dimensions.get('window').height / 1.5,
    }
});