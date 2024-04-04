import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ProductCart = ({ item }) => {
  return (
    <div className="flex flex-col cursor-pointer ">
      <Link to={`/shop/${item.id}`}>
        <div>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt="product image"
            className="object-cover w-[80%] h-[80%]"
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
