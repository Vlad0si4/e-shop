import { Services } from "../components/Services";
import { TrendingProducts } from "../components/TrendingProducts";

import products from "../assets/data/products";
import { useEffect, useState } from "react";
import { BestSales } from "../components/BestSales";
import { TimerCount } from "../components/TimerCount";
import { Hero } from "../components/Hero";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProduct = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProduct = products.filter(
      (item) => item.category === "sofa"
    );
    setBestSalesProducts(filteredBestSalesProduct);
    setTrendingProducts(filteredTrendingProduct);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <TrendingProducts data={trendingProducts} />
      <BestSales data={bestSalesProducts} />
      <TimerCount />
    </>
  );
};

export default Home;
