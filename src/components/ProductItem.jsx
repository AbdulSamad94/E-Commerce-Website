import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, img, name, price }) {
  const { currency } = useContext(shopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer shadow"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={img[0]}
          alt=""
        />
      </div>
      <div className="flex flex-col p-2 ">
        <p className="pt-2 pb-1 text-sm text-gray-500">{name}</p>
        <p className="text-sm font-bold">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
}

export default ProductItem;
