import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const ComponenetsScreen = () => {    
    const yourname = 'Michael';

    // Display two different text elements
    return  <View>
        <Text style = {styles.textStyle}>Getting started with react native!</Text>
        <Text style = {styles.subText}>My name is {yourname}</Text>
    </View>
    
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },

    subText: {
        fontSize: 20
    }
});

export default ComponenetsScreen;