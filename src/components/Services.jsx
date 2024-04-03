import { GrDeliver } from "react-icons/gr";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section className="container flex ">
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
    </section>
  );
};
