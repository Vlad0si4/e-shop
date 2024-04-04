import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-img.png";
import { motion } from "framer-motion";
import { Services } from "../components/Services";
import { TrendingProducts } from "../components/TrendingProducts";

import products from "../assets/data/products";
import { useEffect, useState } from "react";
import { BestSales } from "../components/BestSales";

const Home = () => {
  const [data, setData] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredProduct = products.filter(
      (item) => item.category === "chair"
    );
    setData(filteredProduct);
  }, []);

  return (
    <>
      <section className="bg-heroBg flex items-center justify-center text-primaryColor">
        <div className="container flex items-center justify-center ">
          <div className="flex flex-col items-start py-20">
            <p className="">Trending product is {year}</p>
            <h2 className="text-primaryColor text-4xl font-bold my-10 ">
              Make Your Interior More Minimalistic & Modern
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              sunt, dolor porro ullam recusandae nobis id error! Excepturi,
              necessitatibus officiis.
            </p>

            <Link to="shop">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="outline-none py-[8px] px-5 bg-primaryColor text-white cursor-pointer text-base rounded-xl mt-10 hover:bg-hover"
              >
                SHOP NOW{" "}
              </motion.button>
            </Link>
          </div>
          <div>
            <img
              src={heroImg}
              alt="hero-image"
              width={800}
              height={800}
              className="py-[50px]"
            />
          </div>
        </div>
      </section>
      <Services />
      <TrendingProducts data={data} />
      <BestSales />
    </>
  );
};

export default Home;
