import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView, FlatList, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import { FontAwesome, Entypo, Feather, MaterialIcons} from '@expo/vector-icons';
import lists from './data.js'
const { height, width } = Dimensions.get('window');

export default class Home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            data: ''
        }
    }
    getData = (text) => {
        const dataNew = lists.filter(list => {
            const nameData = list.name.toUpperCase()
            const textData = text.toUpperCase()
            return nameData.indexOf(textData) > -1
        })
        this.setState({
            data: dataNew,
            text
        })
    }
    render() {
        const {text, data} = this.state;
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#f2eee5'}}>
                <View style={styles.header}>
                    <View style={styles.textInput}>
                        <FontAwesome name="search" size={20} color='grey' 
                            style={{flex: 1}}
                        />
                        <TextInput 
                            placeholder='Search'
                            placeholderTextColor="grey"
                            keyboardAppearance="dark"
                            onChangeText={(text) => this.getData(text)}
                            value={text}
                            style={{paddingRight: 10, flex: 9}}
                            autoFocus={true}
                        />
                        {
                            text ? 
                            <TouchableOpacity onPress={() => this.setState({text: ''})}>
                                <MaterialIcons name="cancel" size={20} color='grey'/> 
                            </TouchableOpacity>
                            : null
                        }
                    </View>
                    <TouchableOpacity style={{flex: 1}}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.cancel}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        numColumns={2}
                        data={data}
                        keyExtractor={data => String(data.id)}
                        renderItem={({item, index})=> {
                            return (
                                <Image source={{uri: item.image}} style={[styles.image, index%2 !==0 ? {marginLeft: 4} : null, {marginBottom: 4}]}/>
                            )
                        }}
                />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        height: 60
    },
    textInput: {
        flexDirection: 'row',
        backgroundColor: '#323232',
        flex: 4.5,
        padding: 7,
        borderRadius: 5,
    },
    cancel: {
        textAlign: 'center',
        color: '#000',
        fontSize: 17,
    },
    image: {
        width: width/2,
        height: 250,
    }
})