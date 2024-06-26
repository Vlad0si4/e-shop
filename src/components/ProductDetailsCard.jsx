import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { ProductList } from "./ProductList";
import { motion } from "framer-motion";
import { Button } from "./Button";

import products from "../assets/data/products";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

export const ProductDetailsCard = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const dispatch = useDispatch();

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [newReviews, setNewReviews] = useState(reviews);

  const addToCart = () => {
    dispatch(
      addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success(`${productName} added successfully`);
  };

  const renderStars = (avgRating) => {
    const fullStars = Math.floor(avgRating);
    const halfStar = avgRating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="orange" size={20} />);
    }
    if (halfStar) {
      stars.push(<FaStarHalf key="half-star" color="orange" size={20} />);
    }
    return stars;
  };

  const relatedProducts = products.filter((item) => item.category === category);

  const submitForm = (e) => {
    e.preventDefault();

    const newReview = {
      name: name,
      rating: rating,
      text: comment,
    };
    setName("");
    setRating(0);
    setComment("");
    setNewReviews((prev) => [...prev, newReview]);
    toast.success("Thank's for you commit");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const containers = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const items = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="flex container my-20">
        <div className="flex items-center justify-center gap-5 flex-col sm:flex-row">
          <img src={imgUrl} alt="image-photo" width={500} height={500} />
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-medium pt-4">{productName}</h2>
            <span className="flex flex-row">{renderStars(avgRating)}</span>
            <p>
              (
              <span className="text-orange-400 opacity-70 font-medium">
                {avgRating}{" "}
              </span>
              ratings)
            </p>
            <p className="font-medium">
              Category: <span className="font-normal">{category}</span>
            </p>
            <p className="text-xl font-medium">$ {price}</p>

            <p className="opacity-70 font-medium">{shortDesc}</p>
            <Button link="#" desc="Add to cart" onClick={addToCart} />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex gap-5 items-center text-xl font-medium text-primaryColor mb-6 cursor-pointer">
          <motion.h3
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${tab === "desc" ? "active" : ""}`}
            onClick={() => setTab("desc")}
          >
            Description
          </motion.h3>
          <motion.h4
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${tab === "rev" ? "active" : ""}`}
            onClick={() => setTab("rev")}
          >
            Reviews ({newReviews.length})
          </motion.h4>
        </div>
        {tab === "desc" ? (
          <p className="leading-8 text-lg mb-6">{description}</p>
        ) : (
          <div>
            <motion.ul
              className="mb-6 containers"
              variants={containers}
              initial="hidden"
              animate="visible"
            >
              {newReviews.map((item, idx) => (
                <motion.li
                  variants={items}
                  key={idx}
                  className="flex flex-col mb-6 gap-2 text-lg leading-8 items"
                >
                  <p className="font-medium text-lg">{item.name}</p>
                  <span className="flex flex-row">
                    {renderStars(item.rating)}
                  </span>
                  <p>
                    <span className="text-orange-400 opacity-70 font-medium">
                      {item.rating}{" "}
                    </span>
                    ( ratings)
                  </p>
                  <p className="font-medium">{item.text}</p>
                </motion.li>
              ))}
            </motion.ul>
            <div className="w-[100%] sm:w-[70%] m-auto my-[50px] ">
              <form onSubmit={submitForm}>
                <h4 className="font-medium text-lg opacity-70 mb-5">
                  Leave your comment
                </h4>
                <div className=" w-[100%]">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mb-5 border w-[100%] px-3 py-4 rounded-xl"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <div className=" cursor-pointer flex flex-row mb-5 gap-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.span
                        key={star}
                        whileTap={{ scale: 1.3 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <FaStar
                          onClick={() => setRating(star)}
                          color={star <= rating ? "orange" : "gray"}
                        />
                      </motion.span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Review Message..."
                    className="mb-5 border w-[100%] px-3 pb-[20%] py-3 rounded-xl"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="outline-none py-[8px] px-5 bg-primaryColor text-white cursor-pointer text-base rounded-xl  hover:bg-hover"
                >
                  Submit
                </motion.button>
              </form>
            </div>

            <section className="container mb-10">
              <h2 className="font-bold text-lg text-primaryColor ">
                You might also like
              </h2>
              <ProductList data={relatedProducts} />
            </section>
          </div>
        )}
      </section>
    </>
  );
};
