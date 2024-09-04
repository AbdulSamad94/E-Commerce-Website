import React, { useContext, useEffect, useState } from "react";
import ProductItem from "../components/ProductItem"
import { shopContext } from "../context/ShopContext";

function RelatedProducts({ category, subcategory }) {
  const { products, currency } = useContext(shopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subcategory === item.subcategory
      );
      setRelated(productsCopy.slice(0,5))
    }
  }, [products]);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full mt-10 ">
        {
            related.map((item, index)=>(
                <ProductItem key={index} id={item._id} price={item.price} img={item.image} name={item.name} />
            ))
        }
      </div>
    </>
  );
}

export default RelatedProducts;
