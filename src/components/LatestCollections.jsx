import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollections() {
  const { products } = useContext(shopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa
          eaque ducimus voluptatem quod.
        </p>
      </div>
      {/* Products Coming */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-10">
        {latestProduct.map((itmes, index) => (
          <ProductItem
            key={index}
            id={itmes._id}
            img={itmes.image}
            name={itmes.name}
            price={itmes.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollections;
