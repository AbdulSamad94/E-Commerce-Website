import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select the product size");
      return;
    }
    let cardData = structuredClone(cartItem);

    if (cardData[itemId]) {
      if (cardData[itemId][size]) {
        cardData[itemId][size] += 1;
      } else {
        cardData[itemId][size] = 1;
      }
    } else {
      cardData[itemId] = {};
      cardData[itemId][size] = 1;
    }

    setCartItem(cardData);
  };

  const updateCartData = async (itemId, size, quantity) => {
    let cartdata = structuredClone(cartItem);
    cartdata[itemId][size] = quantity;
    setCartItem(cartdata)
  };

  function getCartCount() {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  }

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    updateCartData,
  };

  return (
    <shopContext.Provider value={value}>{props.children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
