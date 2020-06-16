import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');


    return <View>
        <Text style={styles.text}>Enter your name:</Text>
        <TextInput 
        style={ styles.input }
        value={name}
        onChangeText={(newText) => setName(newText)}
         />
        <Text style={styles.text}>Your name is: { name }</Text>
        { name.length < 2 ? <Text style={styles.text}>Not long enough!</Text> : null }
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    },
    text: {
        margin: 15
    }
});

export default TextScreen;