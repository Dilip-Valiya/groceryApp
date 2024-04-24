import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {AppContext, CartContext} from '../../constant';
import CartItem from '../components/cartItem';

const CartScreen = ({navigation}) => {
  const {cartItems} = useContext(CartContext);
  const {products} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={products.filter(item => cartItems[item.id])}
        ListHeaderComponent={<Text style={styles.header}>Cart details</Text>}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CartItem item={item} navigation={navigation} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text>There is nothing in the cart as of now!</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 10,
  },
  emptyContainer: {
    padding: 30,
    backgroundColor: '#fff',
    margin: 30,
    borderRadius: 10,
  },
});

export default CartScreen;
