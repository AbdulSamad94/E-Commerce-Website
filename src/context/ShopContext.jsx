import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const shopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <shopContext.Provider value={value}>{props.children}</shopContext.Provider>
  );
  
};

export default ShopContextProvider;
