import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import HeartButton from "../components/addToFavorite";
import { AppContext, CartContext } from "../../constant";

const ProductDetails = ({ route }) => {
  const { id } = route.params;
  const { products } = useContext(AppContext);
  const { cartItems, handleAddItem, handleDeleteItem } =
    useContext(CartContext);

  const item = products.find((product) => product.id === id);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.heartButtonContainer}>
        <HeartButton item={item} />
      </View>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.priceRatingContainer}>
          <Text style={styles.price}>
            <Text style={{ color: "green" }}>$</Text> {item.price}
          </Text>
          <Text style={styles.rating}>
            <Text style={{ color: "#FAD5A5" }}>✮</Text> {item.rating.rate} (
            {item.rating.count})
          </Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        {cartItems[id] ? (
          <View style={styles.cartButtonsContainer}>
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => handleDeleteItem(id)}
            >
              <Text style={styles.cartButtonText}>-</Text>
            </TouchableOpacity>
            <Text>{cartItems[id]}</Text>
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => handleAddItem(id)}
            >
              <Text style={styles.cartButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddItem(id)}
          >
            <Text style={styles.addToCartButtonText}>Add to cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  heartButtonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  image: {
    width: "80%",
    height: 400,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: "center",
    gap: 10,
  },
  priceRatingContainer: {
    flexDirection: "row",
    gap: 10,
  },
  price: {
    fontSize: 20,
  },
  rating: {
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "left",
  },
  cartButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cartButton: {
    backgroundColor: "#52bbab",
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  cartButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  addToCartButton: {
    backgroundColor: "#52bbab",
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  addToCartButtonText: {
    color: "#fff",
  },
});

export default ProductDetails;
