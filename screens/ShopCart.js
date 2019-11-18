import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
const { height, width } = Dimensions.get('window');
import { AntDesign, Ionicons } from '@expo/vector-icons';
import {increaseProduct, decreaseProduct, deleteProduct} from '../redux/actions/index';

class ShopCart extends Component {
    showTotalCost = (tasks) => {
        console.log(tasks)
        let result = null;
        tasks.forEach(element => {
            result += element.product.price*element.quantity
        });
        return result
    }
    render() {
        if (this.props.tasks.length === 0) {
            return <Text style={styles.empty}>Shop Cart Empty, Please choose one.</Text>
        }
        return (
            <View style={{backgroundColor: '#f2eee5', flex: 1}}>
                <FlatList
                    numColumns={1}
                    data={this.props.tasks}
                    keyExtractor={(data, index) => String(index)}
                    renderItem={({item}) => {
                        // console.log(item.product)
                        return (
                            <View style={styles.container}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image 
                                        source={{uri: item.product.image}}
                                        style={styles.image}
                                    />
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <Text style={styles.text}>{item.product.name}</Text>
                                    <Text style={styles.text}>{Math.round((item.product.price * item.quantity)*100)/100}$</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 10}}>
                                    <TouchableOpacity onPress={() => this.props.increaseProduct(item.product)}>
                                        <AntDesign name="pluscircleo" size={20} color="grey" />
                                    </TouchableOpacity>
                                    <Text style={styles.text}>{item.quantity}</Text>
                                    {
                                        item.quantity > 0 ? 
                                        <TouchableOpacity onPress={() => this.props.decreaseProduct(item.product)}>
                                            <AntDesign name="minuscircleo" size={20} color="grey" />
                                        </TouchableOpacity>
                                        : null
                                    }
                                </View>
                                <TouchableOpacity onPress={() => this.props.deleteProduct(item.product)}>
                                    <AntDesign name="delete" size={30} color="red" />
                                </TouchableOpacity>                      
                            </View>
                        )
                    }}
                />
                <View style={{marginHorizontal: 20}}>
                    <Text style={[styles.text, {fontSize: 20}]}>Total Cost: {Math.round(this.showTotalCost(this.props.tasks)*100)/100} $</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    empty: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
    },
    image: {
        height: '100%',
        width: '100%'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        height: 150
    },
    text: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 17
    }
})
const mapStateToProps = (state, ownProps) => {
    console.log(state.cart)
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps, {increaseProduct, decreaseProduct, deleteProduct})(ShopCart)