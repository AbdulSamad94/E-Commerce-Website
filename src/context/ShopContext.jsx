import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate()

  const totalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      let productInfo = products.find((e) => e._id === item);
      for (const items in cartItem[item]) {
        try {
          if (cartItem[item][items] > 0) {
            totalAmount += productInfo.price * cartItem[item][items];
          }
        } catch (error) {
          console.log("error");
        }
      }
    }
    return totalAmount;
  };

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
    setCartItem(cartdata);
  };

  function getCartCount() {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {
          console.log("Eroor");
        }
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
    totalAmount,
    navigate
  };

  return (
    <shopContext.Provider value={value}>{props.children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
