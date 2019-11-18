import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
const { height, width } = Dimensions.get('window');
import StarRating from 'react-native-star-rating';
import { AntDesign, Ionicons } from '@expo/vector-icons';
class HomeItem extends Component {
    state = {
        isSelect: false
    }
    onPressHandle = () => {
        this.props.onPress();
        Alert.alert('Choose product success!')
    }
    render() {
        const {name, image, price, rating, index} = this.props;
        const {isSelect} = this.state
        return (
            <View style={[styles.container, index%2 !== 0 ? {marginLeft: 2} : null]}>
                <Image 
                    source={{uri: image}}
                    style={styles.image}
                />
                <Text style={styles.name}>{name}</Text>
                <View style={styles.info}>
                    <Text style={styles.text}>{price}$</Text>
                    <StarRating 
                        rating={rating}
                        disabled={false}
                        maxStars={5}
                        fullStar={'star'}
                        starSize={18}
                        halfStarColor={'#ffd739'}
                        fullStarColor={'#ffd739'}
                        emptyStarColor={'#ffd739'}
                    />
                </View>
                <TouchableOpacity style={styles.select} onPress={this.onPressHandle}>
                    <Text style={styles.name}>Select</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        height: 220
    },
    container: {
        width: width/2,
        height: 320,
        backgroundColor: '#fff',
        marginBottom: 7,
    },
    name: {
        textAlign: 'center',
        marginVertical: 3,
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    text: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 15
    },
    select: {
        textAlign: 'center',
        borderColor: 'grey',
        padding: 5,
        borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 40,
        marginVertical: 5,
    }
})

export default HomeItem