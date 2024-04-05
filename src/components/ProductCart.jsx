import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const ProductCart = ({ item }) => {
  return (
    <div className="flex flex-col cursor-pointer min-w-[200px] min-h-[200px] ">
      <Link to={`/shop/${item.id}`}>
        <div>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt="product image"
            className=" h-[100%] w-[100%] object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium mt-3 text-primaryColor">
            {item.productName}
          </h3>
          <span className="text-s font-light">{item.category}</span>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-4">
        <span className=" font-bold">$ {item.price}</span>
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className="p-[5px] bg-primaryColor text-white rounded-full hover:bg-hover "
        >
          <FiPlus size={20} />
        </motion.span>
      </div>
    </div>
  );
};

ProductCart.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
