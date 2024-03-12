import React from "react";
import Cart from "../../assets/add-cart";
import { add } from "../../redux/reducer/card";
import { useDispatch } from "react-redux";

const Card = ({ description, price, id, image, title }) => {
  const dispatch = useDispatch();
  const addStore = () => {
    dispatch(add({ description, price, id, image, title }));
  };
  return (
    <div className=" rounded-[20px] flex flex-col justify-between p-3 shadow-xl  ">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[200px] h-[300px] cursor-pointer">
          <img className="w-full h-full object-contain " src={image} alt="" />
        </div>
        <div>
          <h1>
            {title.length > 30 ? description.slice(0, 30) + "..." : title}
          </h1>
          <strong className="text-small2">{price}$</strong>
          <h1>
            {description.length > 50
              ? description.slice(0, 50) + "..."
              : description}
          </h1>
        </div>
      </div>
      <div className="flex justify-around gap-2 ">
        <button
          onClick={addStore}
          className=" w-[50%] flex gap-2 items-center bg-primary p-2 rounded-md text-white text-small"
        >
          <Cart /> ADD
        </button>
      </div>
    </div>
  );
};

export default Card;
