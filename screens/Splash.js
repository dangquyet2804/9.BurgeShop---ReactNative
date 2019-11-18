import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView} from 'react-native'
import logo from '../assets/logo.png'

export default class Splash extends Component {
    componentDidMount() {
        this.checkLogin()
    }
    checkLogin = () => {
        setTimeout(() => {
            this.props.navigation.navigate('AuthStack')
        }, 1000);
    }
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <Image 
                    source={logo}
                    style={{width: 150, height: 150}}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#36b5b0',
    }
})