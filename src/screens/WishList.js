import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { AppContext, FavoriteContext } from "../../constant";
import SingleItem from "../components/ItemDetails";

const renderEmptyListComponent = () => (
  <View style={styles.emptyListContainer}>
    <Text>There is nothing in the favorite list</Text>
  </View>
);

const WishList = ({ navigation }) => {
  const { products } = useContext(AppContext);
  const { favoriteItems } = useContext(FavoriteContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={products.filter((item) => favoriteItems[item.id])}
        horizontal={false}
        ListHeaderComponent={
          <Text style={styles.headerText}>Your Favorite</Text>
        }
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SingleItem item={item} navigation={navigation} />
        )}
        ListEmptyComponent={renderEmptyListComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "600",
    paddingLeft: 10,
  },
  columnWrapper: {
    borderRadius: 10,
    borderColor: "#000",
  },
  emptyListContainer: {
    padding: 30,
    backgroundColor: "#fff",
    margin: 30,
    borderRadius: 10,
  },
});

export default WishList;
