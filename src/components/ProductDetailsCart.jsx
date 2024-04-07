import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

import products from "../assets/data/products";
import { Button } from "./Button";
import { useEffect } from "react";

export const ProductDetailsCart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

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

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = product;

  return (
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
          <span className="text-xl font-medium">$ {price}</span>
          <p className="opacity-70 font-medium">{shortDesc}</p>
          <Button link="cart" desc="Add to cart" />
        </div>
      </div>
    </section>
  );
};
