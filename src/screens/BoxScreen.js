import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={ styles.viewStyle }>
        <View style={ styles.viewOneStyle }></View>
        <View style={ styles.viewTwoStyle }></View>
        <View style={ styles.viewThreeStyle }></View>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        borderWidth: 3,
        backgroundColor: 'red',
        height: 100,
        width: 120
    },
    viewTwoStyle: {
        borderWidth: 3,
        backgroundColor: 'green',
        height: 100,
        width: 120,
        marginTop: 100
    },
    viewThreeStyle: {
        borderWidth: 3,
        backgroundColor: 'blue',
        height: 100,
        width: 120
    }
}); 

export default BoxScreen;