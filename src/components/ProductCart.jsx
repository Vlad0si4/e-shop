import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

export const ProductCart = ({ item }) => {
  const { id, productName, price, imgUrl, category } = item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItem({
        id: id,
        productName: productName,
        price: price,
        image: imgUrl,
      })
    );
    toast.success(`${productName}  added successful`);
  };
  return (
    <div className="flex flex-col cursor-pointer min-w-[200px] min-h-[200px] ">
      <Link to={`/shop/${id}`}>
        <div>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={imgUrl}
            alt="product image"
            className=" h-[100%] w-[100%] object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium mt-3 text-primaryColor">
            {productName}
          </h3>
          <span className="text-s font-light">{category}</span>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-4">
        <span className=" font-bold">$ {price}</span>
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className="p-[5px] bg-primaryColor text-white rounded-full hover:bg-hover "
          onClick={addToCart}
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
