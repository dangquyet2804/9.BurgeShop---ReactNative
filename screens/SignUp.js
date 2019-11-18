import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Alert} from 'react-native'
import logo from '../assets/logo.png'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import bg from '../assets/bg-1.jpeg';
import { Ionicons } from "@expo/vector-icons";
import * as firebase from 'firebase';

export default class SignIn extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            err: ''
        }
    }
    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
                Alert.alert('Sign Up success')
            })
        .catch(err => this.setState({err: err.message}))
    }
    render() {
        return (
            <ImageBackground 
                source={bg}
                style={styles.backgroundImg}    
            >
                <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    
                    <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>
                        <View style={styles.screen}>
                            <Image 
                                source={logo}
                                style={styles.image}
                            />
                            {this.state.err ? <Text style={styles.err}>{this.state.err}</Text> : null}
                        </View>
                        <View style={{flex: 2, marginHorizontal: 30}}>
                            <CustomInput label="Full Name" 
                                onPress={(name) => this.setState({name})}
                                value={this.state.name}
                            />
                            <CustomInput label="Email Address" keyboardType="email-address"
                                onPress={(email) => this.setState({email})}
                                value={this.state.email}
                            />
                            <CustomInput label="Password" secureTextEntry={true}
                                onPress={(password) => this.setState({password})}
                                value={this.state.password}
                            />
                            <CustomButton title="Sign Up"
                                onPress={this.handleSignUp}
                            />
                            <View style={styles.signup}>
                                <Text style={{fontFamily: 'OpenSans-Light', fontSize: 17, color: '#fff'}}>Have an account?</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                                    <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 17, color: '#ff8ba7'}}> Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                    <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Ionicons name="ios-arrow-round-back" size={50} color='#fff'/>
                    </TouchableOpacity>
                    
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signup: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backgroundImg: {
        flex: 1
    },
    back: {
        position: 'absolute',
        top: 40,
        left: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center"
    },
    err: {
        fontFamily: 'OpenSans-Light',
        fontSize: 17,
        color: '#ff8ba7',
        marginTop: 10,
    }
})
