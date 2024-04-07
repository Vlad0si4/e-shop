import { useState } from "react";
import { CommonSection } from "../components/CommonSection";
import { Filter } from "../components/Filter";

import products from "../assets/data/products";
import { ProductList } from "../components/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (filterValue) => {
    console.log(filterValue);
    if (filterValue === "all") {
      setProductsData(products);
    } else {
      const filteredProducts = products.filter(
        (item) => item.category === filterValue
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (value) => {
    console.log(value);
    const searchProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(value.toLowerCase())
    );
    setProductsData(searchProduct);
  };

  return (
    <>
      <CommonSection title="Products" />
      <Filter filter={handleFilter} search={handleSearch} />
      <div className="container mb-12">
        {productsData.length === 0 ? (
          <h1 className="text-center">No products are found</h1>
        ) : (
          <ProductList data={productsData} />
        )}
      </div>
    </>
  );
};

export default Shop;
