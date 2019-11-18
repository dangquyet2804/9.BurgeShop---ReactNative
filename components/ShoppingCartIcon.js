import React, {Component} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'

class ShoppingCartIcon extends Component {
    render() {
        return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ShopCart')}>
                <FontAwesome name="cart-plus" size={30}/>
            </TouchableOpacity>
            <View style={styles.textCon}>
                <Text style={styles.text}>{this.props.product.length}</Text>
            </View>
        </View>
    )
    }
}
const styles = StyleSheet.create({
    screen: {
        marginRight: 10,
        marginBottom: 7,
    },
    text: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center'
    },
    textCon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#8f4426',
        position: 'absolute',
        top: -5,
        left: -5,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
})
const mapStateToProps = (state, ownProps) => {
    return {
        product: state.tasks
    }
}
export default connect(mapStateToProps, null)(withNavigation(ShoppingCartIcon))

