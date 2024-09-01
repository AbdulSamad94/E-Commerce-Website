import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function BestSeller() {
  const { products } = useContext(shopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((items) => items.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          provident earum nobis commodi illum!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-10">
        {bestSeller.map((itmes, index) => (
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

export default BestSeller;
