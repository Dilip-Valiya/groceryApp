import React, {useContext} from 'react';
// import Ionicons from '@react-native-vector-icons/ionicons';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import {CartContext} from '../../constant';

export default function CartIcon() {
  const navigation = useNavigation();
  const {cartItems} = useContext(CartContext);
  const cartLen = Object.keys(cartItems).length;

  const renderBadge = cartLen > 0 && (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{cartLen}</Text>
    </View>
  );

  return (
    <TouchableOpacity
      style={{marginRight: 10}}
      onPress={() => {
        navigation.navigate('Cart');
      }}>
      {renderBadge}
      <Image
        source={require('../images/cart.png')}
        style={styles.bottomTabIcon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 50,
    width: 15,
    height: 15,
    right: -2,
    top: -2,
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
  bottomTabIcon: {
    width: 30,
    height: 30,
    tintColor: 'blue',
  },
});
