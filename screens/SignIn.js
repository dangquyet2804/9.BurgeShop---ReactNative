import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity} from 'react-native'
import logo from '../assets/logo.png'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import bg from '../assets/bg.jpeg';
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
            err: ''
        }
    }
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "Home" : "AuthStack");
        });
    }
    handleSignIn = () => {
        const {email, password} = this.state;
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => this.setState({err: err.message}))
    }

    render() {
        return (
            <ImageBackground 
                source={bg}
                style={styles.backgroundImg}    
            >
                <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <SafeAreaView style={{flex: 1}}>
                        <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>
                            <View style={styles.screen}>
                                <Image 
                                    source={logo}
                                    style={styles.image}
                                />
                                {this.state.err ? <Text style={styles.err}>{this.state.err}</Text> : null}
                            </View>
                            <View style={{flex: 2, marginHorizontal: 30}}>
                                <CustomInput label="Email Address"                            keyboardType="email-address"
                                    onPress={(email) => this.setState({email})}
                                    value={this.state.email}
                                />
                                <CustomInput label="Password" secureTextEntry={true}
                                    onPress={(password) => this.setState({password})}
                                    value={this.state.password}
                                />
                                <CustomButton title="Sign In"
                                    onPress={this.handleSignIn}
                                />
                                <View style={styles.signup}>
                                    <Text style={{fontFamily: 'OpenSans-Light', fontSize: 17, color: '#fff'}}>New to Food App?</Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                        <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 17, color: '#ff8ba7'}}> Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </SafeAreaView>
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
    err: {
        fontFamily: 'OpenSans-Light',
        fontSize: 17,
        color: '#ff8ba7',
        marginTop: 10,
    }
})
