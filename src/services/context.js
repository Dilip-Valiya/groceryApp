import React, {useEffect, useState, useCallback} from 'react';
import {AppContext} from '../../constant';
import CartContextProvider from './cartContext.js';
import FavoriteContextProvider from './favoriteContext.js';
import ThemeContextProvider from './themeContext.js';

function ContextProvider({children}) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchProducts = useCallback(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const fetchCategory = useCallback(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchCategory();
  }, [fetchProducts, fetchCategory]);

  return (
    <AppContext.Provider value={{products, category}}>
      <CartContextProvider>
        <FavoriteContextProvider>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </FavoriteContextProvider>
      </CartContextProvider>
    </AppContext.Provider>
  );
}

export default ContextProvider;
