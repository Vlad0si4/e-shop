import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

export const Footer = () => {
  const year = new Date().getFullYear();
  // flex md:items-center flex-col md:flex-row sm:justify-between
  return (
    <footer className="bg-primaryColor pt-[60px] pb-[30px] text-white">
      <div className="container flex flex-col gap-5 sm:flex-row sm:justify-around lg:justify-between">
        <div className=" flex lg:flex-row flex-col gap-5 lg:items-center lg:gap-48">
          <div className="w-[200px]">
            <Link to="/">
              <div className="flex items-center gap-4 ">
                <h1 className="font-bold text-xl pb-2">E-Shop</h1>
              </div>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis laudantium sunt consequatur incidunt dolor commodi!
            </p>
          </div>
          <div className="">
            <h4 className="font-bold text-xl pb-2">Top Categories</h4>
            <ul className="flex flex-col gap-3">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="#">Mobile Phones</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="#">Modern Sofa</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="#">Arm Chair</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="#">Smart Watches</Link>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="flex lg:flex-row gap-7 flex-col lg:items-center lg:gap-48">
          <div className="">
            <h4 className="font-bold text-xl pb-2 ">Useful Links</h4>
            <ul className="flex flex-col gap-3">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/shop">Shop</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/cart">Cart</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/login">Login</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="#">Privacy Policy</Link>
              </motion.li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-xl">Contact</h4>
            <ul className="flex flex-col gap-5">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  to="https://maps.google.com?q=123 Kiev, Ukraine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5"
                >
                  <span>
                    <CiLocationOn />
                  </span>
                  123 Kiev, Ukraine
                </Link>
              </motion.li>

              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="tel:+380123123123"
                  passHref
                  className="flex items-center gap-5"
                >
                  <span>
                    <IoIosPhonePortrait />
                  </span>
                  +380 123 123 123
                </Link>
              </motion.li>

              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="mailto:example@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5"
                >
                  <span>
                    <MdOutlineEmail />
                  </span>
                  example@gmail.com
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-[60px] text-xs text-center">
        <p className="text-gray-400">
          Copyright {year} developed by V. Boiko. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};
