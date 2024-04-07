import heroImg from "../assets/images/hero-img.png";
import { Button } from "./Button";
export const Hero = () => {
  const year = new Date().getFullYear();

  return (
    <section className="bg-heroBg flex items-center justify-center text-primaryColor mb-20">
      <div className="container flex items-center justify-center ">
        <div className="flex flex-col items-start py-20">
          <p className="">Trending product is {year}</p>
          <h2 className="text-primaryColor text-4xl font-bold my-10 ">
            Make Your Interior More Minimalistic & Modern
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt,
            dolor porro ullam recusandae nobis id error! Excepturi,
            necessitatibus officiis.
          </p>
          <Button link="shop" desc="SHOP NOW" />
        </div>
        <div>
          <img
            src={heroImg}
            alt="hero-image"
            width={800}
            height={800}
            className="py-[50px]"
          />
        </div>
      </div>
    </section>
  );
};
