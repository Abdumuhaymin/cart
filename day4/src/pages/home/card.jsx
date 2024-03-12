import React from "react";
import { useSelector } from "react-redux";
import StoreCart from "../../components/store-card/store-cart";
import { Link } from "react-router-dom";
const Card = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <div className="container">
      <Link
        to="/"
        className=" mt-[20px] py-[30px] px-[100px] bg-primary p-2 rounded-md text-white text-small "
      >
        BACK TO SHOP
      </Link>
      {products.map((item) =>
        item ? (
          <StoreCart key={item.id} {...item} />
        ) : (
          <h1>--YOUR CART IS EMPTY--</h1>
        )
      )}
    </div>
  );
};

export default Card;
