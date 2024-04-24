import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeartButton from "./addToFavorite";
import { CartContext } from "../../constant";

const CartItem = ({ item, navigation }) => {
  const { cartItems, handleAddItem, handleDeleteItem } =
    useContext(CartContext);

  return (
    <View style={styles.container}>
      <View style={styles.heart}>
        <HeartButton item={item} />
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.innerItem}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Product Details", { id: item.id })
            }
          >
            <Image style={styles.image} source={{ uri: item.image }} />
          </TouchableOpacity>
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
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleDeleteItem(item.id)}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text>{cartItems[item.id]}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleAddItem(item.id)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
    width: "95%",
    display: "flex",
    alignItems: "center",
  },
  heart: { position: "absolute", top: 10, right: 10 },
  itemContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  innerItem: { alignItems: "center", width: 200 },
  textContainer: { gap: 5, alignItems: "center" },
  image: {
    width: 75,
    height: 75,
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: { fontWeight: "500", fontSize: 14, maxWidth: 200 },
  price: { fontWeight: "500", color: "blue", fontSize: 20 },
  currency: { color: "green", paddingRight: 10 },
  ratingStar: { color: "#FAD5A5" },
  quantityContainer: { flexDirection: "row", gap: 10, alignItems: "center" },
  quantityButton: {
    backgroundColor: "#52bbab",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  quantityButtonText: { color: "#fff" },
});
