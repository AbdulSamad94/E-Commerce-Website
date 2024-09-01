import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Policy() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
        <div>
          <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-500">We offer hastle free exchange policy</p>
        </div>
        <div>
          <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-500">We provide 7 days free return policy</p>
        </div>
        <div>
          <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Best customer support</p>
          <p className="text-gray-500">we provide 24/7 customer support</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-medium">Subscribe now & get 20% off</h1>
        <p className="text-gray-500 text-center sm:text-base text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex justify-center items-center mb-10"
        >
          <input
            required
            className="w-2/5 rounded-tl-md text-base font-normal rounded-bl-md px-5 h-12 ring-1 ring-gray-300 focus:outline-none"
            type="email"
            placeholder="Enter your email"
            name=""
            id=""
          />
          <button
            type="submit"
            className="tracking-tighter uppercase h-[49px] rounded-tr-md rounded-br-md px-8 text-white text-sm bg-black"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}

export default Policy;
