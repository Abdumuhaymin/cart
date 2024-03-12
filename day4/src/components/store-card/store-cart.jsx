import React from "react";
import { useDispatch } from "react-redux";
import { toggleProdact,toggleProdact2,deleteItem } from "../../redux/reducer/card";
import Delete from "../../assets/delete";
const StoreCart = ({
  description,
  price,
  id,
  image,
  title,
  userCount,
  userPrice,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" mt-10 rounded-[20px] flex flex-col justify-between p-10  shadow-xl  hover:shadow-2xl ">
        <div className="flex  items-center gap-20">
          <div className="w-[200px] h-[300px] cursor-pointer">
            <img className="w-full h-full object-contain " src={image} alt="" />
          </div>
          <div className="w-[60%]">
            <h1 className="text-small2">{title}</h1>
            <strong className="text-small2 text-red-600">{userPrice}$</strong>
            <h1>
              {description.length > 300
                ? description.slice(0, 300) + "..."
                : description}
            </h1>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  dispatch(toggleProdact({ type: "increment", id }))
                }
                className="px-5 py-2 bg-primary rounded-md"
              >
                +
              </button>
              <strong className="border px-5 py-2 rounded-md ">
                {userCount}
              </strong>
              <button>
                {
                  (userCount == 1 ? (
                    <button onClick={()=> dispatch(deleteItem({id}))} className="px-[12.5px] py-[10px] bg-red-500 rounded-md"> <Delete/></button>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch(toggleProdact2({ type: "decrement", id }))
                      }
                      className="px-5 py-2 bg-primary rounded-md"
                    >
                      -
                    </button>
                  ))
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCart;
