import React, {useContext} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {FavoriteContext} from '../../constant';

const HeartButton = ({item}) => {
  const {toggleFavorite, favoriteItems} = useContext(FavoriteContext);

  const handlePress = () => {
    toggleFavorite(item.id);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image
          source={
            favoriteItems[item.id]
              ? require('../images/wishlist_fill.png')
              : require('../images/wishlist.png')
          }
          style={styles.bottomTabIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    width: 30,
    height: 30,
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
    tintColor: 'red',
  },
});

export default HeartButton;
