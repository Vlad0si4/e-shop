import { ProductList } from "./ProductList";
import PropTypes from "prop-types";

export const Arrivals = ({ mobile, wireless }) => {
  const combinedData = [...mobile, ...wireless];
  return (
    <section className="container mb-20">
      <h2 className="text-4xl font-bold text-primaryColor text-center pb-[50px] ">
        New Arrivals
      </h2>
      <ProductList data={combinedData} />
    </section>
  );
};

Arrivals.propTypes = {
  mobile: PropTypes.array.isRequired,
  wireless: PropTypes.array.isRequired,
};
