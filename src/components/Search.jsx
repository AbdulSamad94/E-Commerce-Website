import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { shopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
function Search() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(shopContext);

  const [visible, setvisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-gray-300 bg-gray-50 shadow text-center">
      <div className="inline-flex items-center justify-center border border-gray-300 px-4 py-2 my-4 mx-5 rounded-full w-3/4 sm:1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search"
          type="text"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={(e) => setShowSearch(false)}
        className="inline cursor-pointer w-3"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
}

export default Search;
