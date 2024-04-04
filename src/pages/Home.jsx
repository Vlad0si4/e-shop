import { Services } from "../components/Services";
import { TrendingProducts } from "../components/TrendingProducts";

import products from "../assets/data/products";
import { useEffect, useState } from "react";
import { BestSales } from "../components/BestSales";
import { TimerCount } from "../components/TimerCount";
import { Hero } from "../components/Hero";
import { Arrivals } from "../components/Arrivals";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProduct = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProduct = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProduct = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProduct = products.filter(
      (item) => item.category === "wireless"
    );
    setBestSalesProducts(filteredBestSalesProduct);
    setTrendingProducts(filteredTrendingProduct);
    setMobileProducts(filteredMobileProduct);
    setWirelessProducts(filteredWirelessProduct);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <TrendingProducts data={trendingProducts} />
      <BestSales data={bestSalesProducts} />
      <TimerCount />
      <Arrivals mobile={mobileProducts} wireless={wirelessProducts} />
    </>
  );
};

export default Home;
