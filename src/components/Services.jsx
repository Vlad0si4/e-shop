import { GrDeliver } from "react-icons/gr";
import { LuRefreshCcw } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiExchangeDollarLine } from "react-icons/ri";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section className="container flex gap-5 flex-wrap justify-center">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-5 bg-card01 flex items-center my-10 rounded-xl gap-5 cursor-pointer "
      >
        <span className="bg-primaryColor p-3 rounded-full text-white hover:bg-hover">
          <GrDeliver size={22} />
        </span>
        <div>
          <h3 className="font-semibold text-primaryColor ">Free Shipping</h3>
          <p className="mt-2  ">Lorem ipsum dolor sit amet.</p>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-5 bg-[#e2f2b2] flex items-center my-10 rounded-xl gap-5 cursor-pointer "
      >
        <span className="bg-primaryColor p-3 rounded-full text-white hover:bg-hover">
          <LuRefreshCcw size={22} />
        </span>
        <div>
          <h3 className="font-semibold text-primaryColor ">Easy Returns</h3>
          <p className="mt-2  ">Lorem ipsum dolor sit amet.</p>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-5 bg-[#ceebe9] flex items-center my-10 rounded-xl gap-5 cursor-pointer "
      >
        <span className="bg-primaryColor p-3 rounded-full text-white hover:bg-hover">
          <RiSecurePaymentLine size={22} />
        </span>
        <div>
          <h3 className="font-semibold text-primaryColor ">Secure Payment</h3>
          <p className="mt-2  ">Lorem ipsum dolor sit amet.</p>
        </div>
      </motion.div>
      {/* <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-5 bg-[#d6e5fb] flex items-center my-10 rounded-xl gap-5 cursor-pointer "
      >
        <span className="bg-primaryColor p-3 rounded-full text-white hover:bg-hover">
          <RiExchangeDollarLine size={22} />
        </span>
        <div>
          <h3 className="font-semibold text-primaryColor ">Back Guarantee</h3>
          <p className="mt-2  ">Lorem ipsum dolor sit amet.</p>
        </div>
      </motion.div> */}
    </section>
  );
};
