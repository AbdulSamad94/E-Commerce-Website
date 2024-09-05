import React, { useContext } from "react";
import Title from "../components/Title";
import { shopContext } from "../context/ShopContext";
function CartTotal() {
  const { currency, totalAmount, deliveryFee } = useContext(shopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"Total"} text2={"amount"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>
            {currency} {totalAmount()}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency} {deliveryFee}.00</p>
        </div>
        <hr />
        <div className="flex justify-between font-bold">
          <p>Total Amount</p>
          <p>{currency} {totalAmount() === 0 ? 0 : totalAmount() + deliveryFee}.00</p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
