import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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

export const NavLinks = ({ isInMenu, onClick }) => {
  return (
    <nav>
      <ul
        className={`flex gap-12 font-medium text-x ${
          isInMenu ? "flex-col" : ""
        }`}
      >
        {navigateLinks.map((item, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink to={item.path} active="active" onClick={onClick}>
              {item.display}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
