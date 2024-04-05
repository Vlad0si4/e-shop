import { ProductList } from "./ProductList";
import PropTypes from "prop-types";

export const BestSales = ({ data }) => {
  return (
    <section className="container mb-20">
      <h2 className="text-4xl font-bold text-primaryColor text-center pb-[50px]">
        Best Sales
      </h2>
      <ProductList data={data} />
    </section>
  );
};

BestSales.propTypes = {
  data: PropTypes.array.isRequired, // Массив товаров
};
