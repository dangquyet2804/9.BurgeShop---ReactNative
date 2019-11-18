import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView, FlatList} from 'react-native'
import { FontAwesome} from '@expo/vector-icons';
import Slider from '../components/Slider';
import HomeItem from '../components/HomeItem';
import data from './data.js'
import {connect} from 'react-redux';
import {addToCart} from '../redux/actions/index';

class Home extends Component {
    onPress = (item) => {
        this.props.addToCart(item, 1);
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f2eee5'}}>
                <ScrollView >
                    <Slider />
                    <View style={{paddingVertical: 5}}>
                        <Text style={styles.text}>Select Choose one. Thank you !!!</Text>
                    </View>
                    <FlatList 
                        style={{paddingVertical: 5}}
                        numColumns={2}
                        data={data}
                        keyExtractor={data => String(data.id)}
                        renderItem={({item, index}) => {
                            return (
                                <HomeItem 
                                    name={item.name} image={item.image} price={item.price} rating={item.rating} index={index}
                                     onPress={() => this.onPress(item)}
                                />
                            )
                        }}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
        fontSize: 17
    }
})
export default connect(null, {addToCart})(Home)