import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const Button = ({ link, desc }) => {
  return (
    <Link to={link}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="outline-none py-[8px] px-5 bg-primaryColor text-white cursor-pointer text-base rounded-xl mt-10 hover:bg-hover"
      >
        {desc}{" "}
      </motion.button>
    </Link>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
