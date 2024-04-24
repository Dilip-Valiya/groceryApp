import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeartButton from './addToFavorite';

const SingleItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {width: '45%'}]}
      onPress={() => navigation.navigate('Product Details', {id: item.id})}>
      <View style={styles.heart}>
        <HeartButton item={item} />
      </View>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.price}>
          <Text style={styles.currency}>$</Text> {item.price}
        </Text>
        <Text>
          <Text style={styles.ratingStar}>✮</Text> {item.rating.rate} (
          {item.rating.count})
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '2.5%',
    borderRadius: 10,
    padding: 10,
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  heart: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  textContainer: {
    gap: 5,
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
  },
  price: {
    fontWeight: '500',
    color: 'blue',
    fontSize: 20,
  },
  currency: {
    color: 'green',
    paddingRight: 10,
    fontSize: 14,
  },
  ratingStar: {
    color: '#FAD5A5',
  },
});

export default SingleItem;
