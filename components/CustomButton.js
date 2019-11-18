import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'

const CustomButton = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.screen}>
                <Text style={styles.title}>
                    {title.toUpperCase()}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    screen: {
        marginBottom: 20,
        backgroundColor: '#ff8ba7',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
        color: '#fff'
    }
});
export default CustomButton
