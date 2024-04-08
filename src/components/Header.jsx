import { Link, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import { RiShoppingCartLine } from "react-icons/ri";
import logo from "../assets/images/eco-logo.png";
import userIcon from "../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { BurgerMenu } from "./BurgerMenu";
import { NavLinks } from "./NavLinks";
import { useSelector } from "react-redux";
import { selectQuantity } from "../redux/slices/cartSelectors";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const totalQuantity = useSelector(selectQuantity);
  const { id } = useParams();

  return (
    <header
      className="sticky top-0  bg-white shadow-md flex  h-[70px]"
      // className={
      //   !id
      //     ? "sticky top-0  bg-white shadow-md flex  h-[70px]"
      //     : "static h-[70px] flex"
      // }
    >
      <div className="container flex items-center justify-between ">
        <Link to="/">
          <motion.div
            className="flex items-center gap-2 sm:gap-4 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            />
            <h1 className="font-bold md:text-xl md:  ">E-Shop</h1>
          </motion.div>
        </Link>
        {!isMobile ? <NavLinks /> : ""}

        <div className="flex items-center gap-4 sm:gap-6 cursor-pointer relative ">
          <FaRegHeart size={22} />
          <span className="absolute top-[-25%] md:top-[-12%] left-[10%]  bg-black text-white rounded-xl w-[15px] h-[15px] z-10 flex justify-center items-center text-xs">
            4
          </span>
          <RiShoppingCartLine size={25} />
          {!totalQuantity ? (
            ""
          ) : (
            <span className="absolute top-[-20%] left-[35%] md:left-[45%] md:top-[-10%] bg-black text-white rounded-xl w-[15px] h-[15px] z-10 flex  justify-center items-center text-xs">
              {totalQuantity}
            </span>
          )}

          <motion.img
            whileTap={{ scale: 1.2 }}
            src={userIcon}
            alt="user-icon"
            className="md:w-[40px] md:h-[40px] w-[30px] h:-[30px]"
          />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
