import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { selectItem, selectTotal } from "../redux/slices/cartSelectors";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { deleteItem } from "../redux/slices/cartSlice";
import { useEffect } from "react";
import { Button } from "./Button";

export const CartDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItem);
  const totalAmount = useSelector(selectTotal);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cartItems]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const containers = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const items = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="container">
      {cartItems.length === 0 ? (
        <h1 className="font-bold text-center my-20">
          No item added to the cart
        </h1>
      ) : (
        <div className="flex items-center justify-around flex-col md:flex-row">
          <table className="  w-[80%]  sm:w-[50%] my-10">
            <thead>
              <tr className="border-b  text-xs md:text-lg text-center ">
                <th className="pb-3">Image</th>
                <th className="pb-3">Title</th>
                <th className="pb-3">Product</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Delete</th>
              </tr>
            </thead>

            <motion.tbody
              className="containers "
              variants={containers}
              initial="hidden"
              animate="visible"
            >
              {cartItems?.map((item, idx) => (
                <tr
                  className="border-b font-medium text-primaryColor  text-center text-xs md:text-lg"
                  key={idx}
                >
                  <Link to={`/shop/${item.id}`}>
                    <motion.td className="items" variants={items}>
                      <motion.img
                        src={item.image}
                        alt="product-image"
                        className="w-[80px] h-[80px] object-contain"
                        whileHover={{ scale: 1.2 }}
                      />
                    </motion.td>
                  </Link>
                  <td className=" border-r ">{item.productName}</td>
                  <td className="border-r ">$ {item.price}</td>
                  <td className=" border-r ">{item.quantity}</td>
                  <motion.td
                    className="pl-3 md:pl-5 lg:pl-6 xl:pl-9"
                    whileHover={{ scale: 1.1, color: "#ff0000" }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <MdDeleteForever
                      className=" cursor-pointer"
                      size={22}
                      onClick={() => handleDelete(item.id)}
                    />
                  </motion.td>
                </tr>
              ))}
            </motion.tbody>
          </table>
          <div className="flex flex-col my-5">
            <h6 className="bg-primaryColor text-white  px-2 mb-2 py-2 rounded-lg">
              Subtotal:{" "}
              <span className=" text-xl font-bold mb-2">$ {totalAmount}</span>
            </h6>

            <p className="opacity-70 ">
              taxes and shipping will calculate <br />
              in checkout
            </p>
            <div className="flex flex-col">
              <Button link="/shop" desc="Continue Shopping"></Button>
              <Button link="/checkout" desc="Checkout"></Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
