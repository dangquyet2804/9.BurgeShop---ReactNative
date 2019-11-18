import React, {Component} from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper';
const { height, width } = Dimensions.get('window');

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../assets/sl4.jpeg'),
                require('../assets/sl2.jpeg'),
                require('../assets/sl3.jpeg'),
                require('../assets/sl1.jpeg')
            ]
        }
    }
    
    render() {
        return (
            <View style={{height: 220}}>
                <Swiper
                autoplay
                autoplayTimeout={3.5}
                >
                    {
                        this.state.images.map((image, index) => {
                            return (
                                <View style={{flex: 1}} key={index}>
                                    <Image source={image} style={{width, flex: 1, height: 240}}/>
                                </View>
                            )
                        })
                    }
                </Swiper>
            </View>
        )
    }
}