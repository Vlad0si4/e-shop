import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

import { RiShoppingCartLine } from "react-icons/ri";
import logo from "../assets/images/eco-logo.png";
import userIcon from "../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { BurgerMenu } from "./BurgerMenu";

const navigateLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

export const Header = () => {
  return (
    <header className="flex  items-center justify-between h-[70px] container ">
      <Link to="/">
        <motion.div
          className="flex items-center gap-4 "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
          <h1 className="font-bold text-xl ">E-Shop</h1>
        </motion.div>
      </Link>
      <nav>
        <ul className="flex items-center gap-12 font-medium text-xl ">
          {navigateLinks.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink to={item.path} active="active">
                {item.display}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-6 cursor-pointer relative">
        <div>
          <FaRegHeart size={22} />
          <span className="absolute top-[-20%] left-[10%] bg-black text-white rounded-xl w-[15px] h-[15px] z-10 flex justify-center items-center text-xs">
            4
          </span>
        </div>

        <div>
          <RiShoppingCartLine size={25} />
          <span className="absolute top-[-20%] left-[50%] bg-black text-white rounded-xl w-[15px] h-[15px] z-10 flex  justify-center items-center text-xs">
            1
          </span>
        </div>

        <motion.img
          whileTap={{ scale: 1.2 }}
          src={userIcon}
          alt="user-icon"
          className="w-[40px] h-[40px]"
        />
      </div>

      <BurgerMenu />
    </header>
  );
};
