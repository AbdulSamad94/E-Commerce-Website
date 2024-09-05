import React, { useContext, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import { shopContext } from "../context/ShopContext";

function PlaceOrder() {
  const { navigate } = useContext(shopContext);
  const [changingColor, setChangingColor] = useState("cod");

  return (
    <div className="border-t border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* LeftSide */}
        <div className="flex flex-col w-full">
          <div className="text-2xl mt-16">
            <Title text1={"Delivery"} text2={"Information"} />
          </div>
          <div className="my-6">
            <form className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  required
                  className="w-full flex-wrap px-3 py-2 border-gray-300 border rounded-md"
                  placeholder="First name"
                  type="text"
                />
                <input
                  className="w-full px-3 py-2 border-gray-300 border rounded-md"
                  placeholder="Last name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <input
                  required
                  className="w-full px-3 py-2 border-gray-300 border rounded-md"
                  placeholder="Email address"
                  type="email"
                  name=""
                  id=""
                />
                <input
                  required
                  className="w-full px-3 py-2 border-gray-300 border rounded-md"
                  type="text"
                  placeholder="Street"
                />
              </div>
              <div className="flex gap-4">
                <input
                  required
                  className="w-full px-3 py-2 border-gray-300 border rounded-md"
                  placeholder="City"
                  type="text"
                />
                <input
                  required
                  className="w-full px-3 py-2 border-gray-300 border rounded-md"
                  placeholder="State"
                  type="text"
                />
              </div>
              <div className="flex gap-4">
                <input
                  className="w-full px-3 py-2 border-gray-300 border rounded-md"
                  placeholder="ZipCode"
                  type="number"
                />
                <input
                  required
                  className="w-full px-3 py-2 border-gray-300 border rounded-md"
                  placeholder="Country"
                  type="text"
                />
              </div>
              <div>
                <input
                  required
                  className="w-full px-3 py-2 border-gray-300 border rounded-md"
                  placeholder="Phone"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </form>
          </div>
        </div>
        {/* RightSide */}
        <div className="w-full mt-10 md:mt-24">
          <CartTotal />
          <div className="my-16 mb-8">
            <Title text1={"payment"} text2={"method"} />
          </div>
          <div className="flex flex-col mb-10 md:mb-0 md:flex-row gap-2 w-full">
            <div
              onClick={() => setChangingColor("razorpay")}
              className="cursor-pointer flex h-12 gap-6 py-1 px-2 items-center border border-gray-400 w-full"
            >
              <p
                className={`${
                  changingColor === "razorpay" ? "bg-green-400" : ""
                } border border-gray-300 h-3 w-3 rounded-full`}
              ></p>
              <img className="w-28" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setChangingColor("stripe")}
              className="flex gap-6 cursor-pointer h-12 items-center py-2 px-4 border border-gray-400 w-full "
            >
              <p
                className={`${
                  changingColor === "stripe" ? "bg-green-400" : ""
                } border border-gray-300 h-3 w-3 rounded-full`}
              ></p>
              <img className="w-14" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setChangingColor("cod")}
              className="flex gap-6 cursor-pointer items-center h-12 border py-2 px-4  border-gray-400 w-full "
            >
              <p
                className={`${
                  changingColor === "cod" ? "bg-green-400" : ""
                } border border-gray-300 h-3 w-3 rounded-full`}
              ></p>
              <p className="font-semibold uppercase text-sm text-gray-500">
                Cash on delievery
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-end">
        <button
        onClick={() => navigate('/orders')}
          onSubmit={() => preventDefault()}
          className="text-white uppercase bg-black text-sm hover:scale-90 duration-200 tracking-tight px-8 py-2 "
        >
          Place order
        </button>
      </div>
    </div>
  );
}

export default PlaceOrder;
