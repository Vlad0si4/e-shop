import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import counterImg from "../assets/images/counter-timer-img.png";
import { Clock } from "./Clock";

export const TimerCount = () => {
  return (
    <section className="bg-primaryColor text-white mb-20">
      <div className=" flex md:items-center md:justify-between container">
        <div className="mt-[30px] md:mt-0">
          <h3 className="md:text-xl font-bold mb-3 text-xs">Limited Offers</h3>
          <h4 className="md:text-3xl font-medium mb-4 text-xl">
            Quality Armchair
          </h4>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="outline-none sm:py-[10px] sm:px-5 px-2 py-1 text-primaryColor bg-white cursor-pointer  rounded-xl hover:bg-hover hover:text-white font-bold "
          >
            <Link to="/shop " className="text-xs sm:text-base">
              Visit Store
            </Link>
          </motion.button>
        </div>
        <div className="flex flex-col items-center md:flex-row mt-[30px]">
          <Clock />

          <div className="">
            <img
              src={counterImg}
              alt="chair"
              className="md:w-[300px] md:h-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
