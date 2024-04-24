import {useState} from 'react';
import {CartContext} from '../../constant';
import {Alert} from 'react-native';

function CartContextProvider({children}) {
  const [cartItems, setCartItems] = useState({});

  const handleAddItem = id => {
    setCartItems(prevCartItems => {
      const newCart = {...prevCartItems};
      newCart[id] = (newCart[id] || 0) + 1;
      return newCart;
    });
  };

  const handleDeleteItem = id => {
    setCartItems(prevCartItems => {
      const newCart = {...prevCartItems};
      if (newCart[id] === 1) {
        delete newCart[id];
      } else if (newCart[id] > 1) {
        newCart[id]--;
      } else {
        Alert.alert('Item already deleted');
      }
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{cartItems, handleAddItem, handleDeleteItem}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
