import React, { useEffect, useState, useContext } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";

function Card() {
  const { products, currency, cartItem, updateCartData, navigate } =
    useContext(shopContext);
  const [scale, setScale] = useState(false);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <>
      <div className="border-t border-gray-300">
        <div className="my-7 text-2xl text-center">
          <Title text1={"your"} text2={"cart"} />
        </div>
        {cartData.map((item, index) => {
          const theProdctData = products.find((e) => e._id === item._id);

          return (
            <div
              className={`flex justify-between items-center gap-6 border-t border-gray-300 border-b py-3`}
              key={index}
            >
              <div className="flex gap-6">
                <img className="w-20" src={theProdctData.image[0]} alt="" />
                <div className="text-sm sm:text-lg font-medium text-gray-700">
                  {theProdctData.name}
                  <div className="flex items-center mt-5">
                    {currency} {theProdctData.price}
                    <div className="ml-5 border border-gray-300 bg-slate-100 w-8 h-8 p-2 flex items-center justify-center ">
                      {item.size}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <input
                  className="border border-gray-300 w-14 sm:w-20 pl-2 h-6 sm:h-8"
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === 0
                      ? null
                      : updateCartData(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
              </div>
              <div>
                <img
                  onClick={() => updateCartData(item._id, item.size, 0)}
                  className="w-5 h-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt=""
                />
              </div>
            </div>
          );
        })}
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => {
                  setScale(!scale);
                  navigate("/placeOrder");
                }}
                className={` ${
                  scale === true ? "scale-90" : ""
                } bg-black text-white text-sm uppercase tracking-tight my-8 px-8 py-3 duration-150`}
              >
                Proceed to check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
