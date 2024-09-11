import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function HeaderLogo({ name }) {
    const urlApexus = 'https://www.apexus.com/';
    const url340b = 'https://www.340bpvp.com/';

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => Linking.openURL(urlApexus)}>
                <Image
                    style={styles.leftLogo}
                    source={require('../assets/images/apexus-logo.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <Text style={styles.tabName}>{name}</Text>

            <TouchableOpacity onPress={() => Linking.openURL(url340b)}>
                <Image
                    style={styles.rightLogo}
                    source={require('../assets/images/340b-logo.png')}
                    resizeMode="'contain"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },

    leftLogo: {
        width: 50,
        height: 40,
    },

    rightLogo: {
        width: 50,
        height: 40,
    },

    tabName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
});