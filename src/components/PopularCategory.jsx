import { ProductList } from "./ProductList";
import PropTypes from "prop-types";

export const PopularCategory = ({ data }) => {
  return (
    <section className="container mb-20">
      <h2 className="text-4xl font-bold text-primaryColor text-center pb-[50px]">
        Popular Category
      </h2>
      <ProductList data={data} />
    </section>
  );
};

PopularCategory.propTypes = {
  data: PropTypes.array.isRequired,
};
