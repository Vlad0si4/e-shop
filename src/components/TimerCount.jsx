import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import counterImg from "../assets/images/counter-timer-img.png";
import { Clock } from "./Clock";

export const TimerCount = () => {
  return (
    <section className="bg-primaryColor text-white ">
      <div className=" flex items-center justify-between container">
        <div>
          <h3 className="text-xl font-bold mb-3">Limited Offers</h3>
          <h4 className="text-3xl font-medium mb-4">Quality Armchair</h4>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="outline-none py-[10px] px-5 text-primaryColor bg-white cursor-pointer text-base rounded-xl hover:bg-hover hover:text-white font-bold "
          >
            <Link to="/shop">Visit Store</Link>
          </motion.button>
        </div>
        <div>
          <Clock />
        </div>
        <div className="">
          <img
            src={counterImg}
            alt="chair"
            className="w-[300px] h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};
