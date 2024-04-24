import React, {useContext, useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppContext} from '../../constant';
import WishList from './WishList';
import SingleItem from '../components/ItemDetails';
import Profile from './Profile';

const BottomTabs = ({selectedTab, setSelectedTab}) => {
  const tabs = [
    {
      icon:
        selectedTab == 0
          ? require('../images/home_fill.png')
          : require('../images/home.png'),
      index: 0,
    },
    {icon: require('../images/search.png'), index: 1},
    {
      icon:
        selectedTab == 2
          ? require('../images/wishlist_fill.png')
          : require('../images/wishlist.png'),
      index: 2,
    },
    {
      icon:
        selectedTab == 3
          ? require('../images/noti_fill.png')
          : require('../images/noti.png'),
      index: 3,
    },
    {
      icon:
        selectedTab == 4
          ? require('../images/user_fill.png')
          : require('../images/user.png'),
      index: 4,
    },
  ];

  return (
    <View style={styles.bottomView}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.bottomTab}
          onPress={() => setSelectedTab(tab.index)}>
          <Image source={tab.icon} style={styles.bottomTabIcon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const SingleCategory = ({text, handleCategory, isActive}) => {
  const containerStyle = {
    margin: 10,
  };

  const viewStyle = {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    ...(isActive ? styles.shadow : {}),
  };

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => handleCategory(text)}>
      <View style={viewStyle}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ProductPage = ({navigation}) => {
  const {products, category} = useContext(AppContext);
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategory = cat => {
    setActiveCategory(prevCat => (prevCat === cat ? '' : cat));
  };

  return (
    <View style={styles.container}>
      {selectedTab === 0 ? (
        <View style={{height: 'auto'}}>
          <FlatList
            data={category}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <SingleCategory
                text={item}
                isActive={item === activeCategory}
                handleCategory={handleCategory}
              />
            )}
          />
          <FlatList
            data={products.filter(product =>
              activeCategory ? product.category === activeCategory : true,
            )}
            horizontal={false}
            columnWrapperStyle={styles.columnWrapper}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <SingleItem item={item} navigation={navigation} />
            )}
          />
        </View>
      ) : selectedTab === 1 ? (
        <Text>search</Text>
      ) : selectedTab === 2 ? (
        <WishList navigation={navigation} />
      ) : selectedTab === 3 ? (
        <Text>Notification</Text>
      ) : (
        <Profile />
      )}
      <BottomTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
    flexGrow: 1,
    // height: "100%",
  },
  headerText: {
    fontSize: 32,
    fontWeight: '600',
    paddingLeft: 10,
  },
  columnWrapper: {
    borderRadius: 10,
    borderColor: '#000',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 5,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  text: {
    fontWeight: '500',
    fontSize: 20,
    color: '#1d1e1f',
  },
});

export default ProductPage;
