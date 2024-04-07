import { ProductCart } from "./ProductCart";
import PropTypes from "prop-types";

export const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
      {data?.map((item, idx) => (
        <ProductCart key={idx} item={item} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
};
