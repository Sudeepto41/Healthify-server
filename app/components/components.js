import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';

function Intro() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.BackgroundImage}
                source={require('./images/intro_image.png')}>

                <Text style={styles.Text}>
                    Hi there!{"\n"}
                    We'll be taking care of ur{"\n"}
                    health from now on.
                </Text>


            </ImageBackground>
        </View>
    );
}