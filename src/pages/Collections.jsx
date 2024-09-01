import React, { useContext, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { shopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItem";

const Collections = () => {
  const { products, showSearch, search } = useContext(shopContext);
  const [showFilter, setshowFilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [sortProduct, setsortProduct] = useState("relevent");

  const controls = useAnimation();
  const filterControls = useAnimation();

  const Category = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((items) => items !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };

  const subCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory((prev) => prev.filter((items) => items !== e.target.value));
    } else {
      setsubcategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyingFilter = () => {
    let productsApplying = products.slice();

    if (search && showSearch) {
      productsApplying = productsApplying.filter((items) =>
        items.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsApplying = productsApplying.filter((items) =>
        category.includes(items.category)
      );
    }
    if (subcategory.length > 0) {
      productsApplying = productsApplying.filter((items) =>
        subcategory.includes(items.subCategory)
      );
    }
    setfilterProducts(productsApplying);
  };

  const toggleSorting = () => {
    let fpCopy = filterProducts.slice();

    switch (sortProduct) {
      case "Low-High":
        setfilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "High-low":
        setfilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyingFilter();
        break;
    }
  };

  useEffect(() => {
    controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
    toggleSorting();
  }, [sortProduct]);

  useEffect(() => {
    filterControls.start({ opacity: 1, x : 0,  transition: { duration: 0.3 } });
    applyingFilter();
  }, [category, subcategory, search, showSearch]);

  useEffect(() => {
    setfilterProducts(products);
  }, [products]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* LeftSide */}

        {/* Filter */}
        <motion.div
          animate={filterControls}
          initial={{ opacity: 0 , x : -50}}
          className="duration-300 min-w-60"
        >
          <p
            onClick={() => setshowFilter(!showFilter)}
            className="my-2 flex text-xl items-center cursor-pointer gap-2 uppercase"
          >
            Filters
            <img
              className={`h-3 cursor-pointer transition duration-300 sm:hidden ${
                showFilter ? "rotate-90" : ""
              }`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>
          <div
            className={`border rounded shadow border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium uppercase">Categories</p>
            <div className="flex sm:flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={Category}
                  className="w-3 "
                  value={"Men"}
                  type="checkbox"
                  name=""
                  id=""
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  onChange={Category}
                  className="w-3 "
                  value={"Women"}
                  type="checkbox"
                  name=""
                  id=""
                />{" "}
                Women
              </p>
              <p className="flex gap-2">
                <input
                  onChange={Category}
                  className="w-3 "
                  value={"Kids"}
                  type="checkbox"
                  name=""
                  id=""
                />{" "}
                Kids
              </p>
            </div>
          </div>
          {/* TypeSection */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium uppercase">type</p>
            <div className="flex sm:flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={subCategory}
                  className="w-3 "
                  value={"Topwear"}
                  type="checkbox"
                  name=""
                  id=""
                />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  onChange={subCategory}
                  className="w-3 "
                  value={"Bottomwear"}
                  type="checkbox"
                  name=""
                  id=""
                />{" "}
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  onChange={subCategory}
                  className="w-3 "
                  value={"Winterwear"}
                  type="checkbox"
                  name=""
                  id=""
                />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </motion.div>

        {/* RightSides */}
        <motion.div
          animate={controls}
          initial={{ opacity: 0, x: 50 }}
          className="flex-1"
        >
          <div className="flex flex-col sm:flex-row justify-between mb-6 text-base sm:text-2xl md:text-3xl">
            <Title text1={"ALL"} text2={"Collections"} />

            {/* ProductSorting */}
            <select
              onChange={(e) => setsortProduct(e.target.value)}
              className="border outline-none border-gray-300 text-sm py-3 px-3 rounded-md shadow"
            >
              <option value="Relevent">Sort by : Relevent</option>
              <option value="Low-High">Sort by : Low-High</option>
              <option value="High-low">Sort by : High-low</option>
            </select>
          </div>
          {/* MapingProducts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((items, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductItems
                  name={items.name}
                  img={items.image}
                  id={items._id}
                  price={items.price}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Collections;
