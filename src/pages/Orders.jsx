import React, { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import { shopContext } from "../context/ShopContext";
function Orders() {

  const today = new Date();

  const date = today.getDate();
  const month = today.getMonth(); 
  const year = today.getFullYear();

  const monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"]
 

  const { products, currency, cartItem } = useContext(shopContext);
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
    <div className="border-t border-gray-300">
      <div className="mt-20 text-2xl text-center">
        <Title text1={"my"} text2={"orders"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const theProdctData = products.find((e) => e._id === item._id);

          return (
            <div
              key={index}
              className="py-8 border-t border-b flex flex-col md:flex-row text-gray-700 md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-16 sm:w-20"
                  src={theProdctData.image[0]}
                  alt=""
                />
                <div>
                  <p className="sm:text-base font-medium">
                    {theProdctData.name}
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-base text-gray-700">
                    <p className="text-lg">
                      {currency} {theProdctData.price}
                    </p>
                    <p className="">Quantity : {item.quantity}</p>
                    <p>Size : {item.size}</p>
                  </div>
                  <p className="mt-3">
                    Date : <span className="text-gray-400">{date}-{monthName[month]}-{year}</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                  <p className="text-sm md:text-base">Ready to ship</p>
                </div>
                <button className="border border-gray-300 py-2 px-4 text-gray-700 font-medium text-sm rounded-md">
                  Track Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
