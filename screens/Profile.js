import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, LayoutAnimation, Image } from 'react-native'
import * as firebase from "firebase";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            displayName: ''
        }
    }
    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
        this.props.navigation.navigate('SignIn')
    };

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <SafeAreaView style={styles.container}>
                <Image 
                    source={{uri: "https://i.pravatar.cc/300"}}
                    style={styles.avatar}
                />
                <View style={styles.info}>
                    <Text style={styles.text}>Name:  {this.state.displayName}</Text>
                    <Text style={styles.text}>Email:  {this.state.email}</Text>
                </View>
                <TouchableOpacity onPress={this.signOutUser} style={styles.logout}>
                    <Text style={styles.text}>Log out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2eee5'
    },
    text: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 15
    },
    avatar: {
        marginRight: 10,
        width: 80, 
        height: 80, 
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: 10,
    },
    logout: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#be7575',
        padding: 10,
        marginHorizontal: 50,
        borderRadius: 5,
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    }
})
