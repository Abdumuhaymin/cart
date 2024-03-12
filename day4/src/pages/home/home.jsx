import React from "react";
import Card from "../../components/card/card";
import AddCart from "../../assets/add-cart";
import { Link } from "react-router-dom";
export const Home = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="relative container">
      <Link
        to="/card"
        className=" mt-[20px] py-[30px] px-[100px] bg-primary p-2 rounded-md text-white text-small "
      >
        YOUR CART{" "}
      </Link>
      <div className=" mt-10 container grid grid-cols-4 gap-10">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
