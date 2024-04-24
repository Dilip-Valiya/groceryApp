import { useState } from "react";
import { FavoriteContext } from "../../constant";

function FavoriteContextProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState({});

  const toggleFavorite = (id) => {
    setFavoriteItems((prevFavItems) => {
      const newFav = { ...prevFavItems };
      if (newFav[id]) delete newFav[id];
      else newFav[id] = true;
      return newFav;
    });
  };

  return (
    <FavoriteContext.Provider value={{ favoriteItems, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
