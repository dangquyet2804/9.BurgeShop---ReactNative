import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({label, onPress, secureTextEntry, keyboardType}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.label}>{label.toUpperCase()}</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry = {secureTextEntry}
                keyboardType={keyboardType}
                onChangeText={onPress}
                // placeholderTextColor='#fff'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        padding: 7,
        borderColor: '#fff',
        fontFamily: 'OpenSans-Light',
        fontSize: 17,
        color: '#fff'
    },
    screen: {
        marginBottom: 10,
    },
    label: {
        marginBottom: 5,
        fontFamily: 'OpenSans-Bold',
        color: '#fff'
    }
});
export default CustomInput
