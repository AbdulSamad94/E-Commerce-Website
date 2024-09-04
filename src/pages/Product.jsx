import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { assets } from "../assets/frontend_assets/assets";
import { shopContext } from "../context/ShopContext";
import Description from "../components/Description";
import Title from "../components/Title";
import RelatedProducts from "../components/RelatedProducts";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(shopContext);
  const [theProduct, setTheProduct] = useState(false);
  const [images, setImages] = useState("");
  const [size, setSize] = useState("");

  const handlingData = () => {
    products.filter((items) => {
      if (items._id === productId) {
        setTheProduct(items);
        setImages(items.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    handlingData();
    window.scrollTo(0, 0); // Scroll to top on product change
  }, [productId, products]);

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay : 0.3 }, // Delayed to occur after the left side
    },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Scroll animation triggers
  const descriptionControls = useAnimation();
  const titleControls = useAnimation();
  const relatedProductsControls = useAnimation();

  const [descriptionRef, descriptionInView] = useInView({ triggerOnce: true });
  const [titleRef, titleInView] = useInView({ triggerOnce: true });
  const [relatedProductsRef, relatedProductsInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (descriptionInView) {
      descriptionControls.start("visible");
    }
    if (titleInView) {
      titleControls.start("visible");
    }
    if (relatedProductsInView) {
      relatedProductsControls.start("visible");
    }
  }, [descriptionInView, titleInView, relatedProductsInView]);

  return theProduct ? (
    <>
      <div className="overflow-hidden border-t-2 border-gray-200">
        <div className="flex flex-col sm:flex-row">
          {/* Left Side */}
          <motion.div
            className="flex justify-center gap-3 flex-col-reverse sm:flex-row mt-10 w-auto h-auto"
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft}
          >
            <motion.div className="flex gap-2 justify-center sm:block flex-row-reverse">
              {theProduct.image.map((item, index) => (
                <motion.img
                  onClick={() => setImages(item)}
                  className="mb-3 w-20 sm:w-28 cursor-pointer"
                  src={item}
                  key={index}
                  alt=""
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </motion.div>
            <motion.div className="w-full">
              <img src={images} alt="" />
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="mt-14 w-auto ml-6"
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
          >
            <div className="font-medium text-2xl">{theProduct.name}</div>
            <div className="flex mt-4 gap-4">
              <div className="flex gap-1 items-center">
                <img className="w-3 h-3" src={assets.star_icon} alt="" />
                <img className="w-3 h-3" src={assets.star_icon} alt="" />
                <img className="w-3 h-3" src={assets.star_icon} alt="" />
                <img className="w-3 h-3" src={assets.star_icon} alt="" />
                <img className="w-3 h-3" src={assets.star_dull_icon} alt="" />
              </div>
              <div>
                <p>(130)</p>
              </div>
            </div>
            <div className="text-3xl font-medium mt-8">
              {currency} {theProduct.price}
            </div>
            <p className="text-gray-500 mt-5 text-base w-80 sm:w-96">
              {theProduct.description}
            </p>
            <div className="mt-6 flex flex-col gap-5">
              <p>Select Size</p>
              <div>
                <div className="flex flex-row gap-4">
                  {theProduct.sizes.map((item, index) => (
                    <button
                      onClick={() => setSize(item)}
                      className={`${
                        item === size ? "ring-black" : ""
                      } border ring-1 border-gray-300 text-lg py-2 px-5 text-center bg-slate-200 `}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <motion.button
                onClick={() => addToCart(theProduct._id, size)}
                className="uppercase text-white tracking-wide px-6 py-3 bg-black rounded-sm"
                whileHover={{ scale: 1.05 }}
              >
                Add to cart
              </motion.button>
            </div>
            <div className="border-t border-gray-300 mt-7 pt-3 text-gray-600 w-full text-sm">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll-triggered animations */}
        <motion.div
          ref={descriptionRef}
          initial="hidden"
          animate={descriptionControls}
          variants={scrollVariants}
        >
          <Description />
        </motion.div>

        <motion.div
          className="text-center text-3xl mt-14"
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={scrollVariants}
        >
          <Title text1={"Related"} text2={"Products"} />
        </motion.div>

        <motion.div
          ref={relatedProductsRef}
          initial="hidden"
          animate={relatedProductsControls}
          variants={scrollVariants}
        >
          <RelatedProducts
            category={theProduct.category}
            subcategory={theProduct.subcategory}
          />
        </motion.div>
      </div>
    </>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
