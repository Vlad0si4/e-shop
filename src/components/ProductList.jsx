import { ProductCart } from "./ProductCart";
import PropTypes from "prop-types";

export const ProductList = ({ data }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
      {data?.map((item, idx) => (
        <li key={idx}>
          <ProductCart item={item} />
        </li>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
};
