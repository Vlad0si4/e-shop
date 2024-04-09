import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { selectItem } from "../redux/slices/cartSelectors";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { deleteItem } from "../redux/slices/cartSlice";

export const CartDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItem);
  console.log(cartItems);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };
  // const handleDelete = (id) => {
  //   const findItem = cartItems.find(item => item.id === cartItems.id)
  //   const deleteItem = cartItems.splice(findItem);
  // }

  return (
    <section className="container">
      {cartItems.length === 0 ? (
        <h1 className="font-bold text-center my-20">
          No item added to the cart
        </h1>
      ) : (
        <table className="  w-[60%] my-10">
          <thead>
            <tr className="border-b text-left ">
              <th className="pb-3">Image</th>
              <th className="pb-3">Title</th>
              <th className="pb-3">Product</th>
              <th className="pb-3">Quantity</th>
              <th className="pb-3">Delete</th>
            </tr>
          </thead>

          <tbody className=" ">
            {cartItems?.map((item, idx) => (
              <tr
                className="border-b text-left font-medium text-primaryColor "
                key={idx}
              >
                <Link to={`/shop/${item.id}`}>
                  <td className="">
                    <motion.img
                      src={item.image}
                      alt="product-image"
                      className="w-[80px] h-[80px] object-contain"
                      whileHover={{ scale: 1.2 }}
                    />
                  </td>
                </Link>
                <td className="font-medium">{item.productName}</td>
                <td className="">$ {item.price}</td>
                <td className="pl-7">{item.quantity}</td>
                <motion.td
                  className="pl-5"
                  whileHover={{ scale: 1.2, color: "#ff0000" }}
                  whileTap={{ scale: 1.1 }}
                >
                  <MdDeleteForever
                    className=" cursor-pointer"
                    size={20}
                    onClick={() => handleDelete(item.id)}
                  />
                </motion.td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};
