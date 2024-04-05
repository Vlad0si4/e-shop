import { ProductList } from "./ProductList";
import PropTypes from "prop-types";

export const TrendingProducts = ({ data }) => {
  return (
    <section className="container mb-20">
      <h2 className="text-4xl font-bold text-primaryColor text-center pb-[20px] ">
        Trending Products
      </h2>
      <ProductList data={data} />
    </section>
  );
};

TrendingProducts.propTypes = {
  data: PropTypes.array.isRequired,
};
