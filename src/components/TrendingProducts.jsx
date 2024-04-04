import { ProductList } from "./ProductList";

export const TrendingProducts = ({ data }) => {
  return (
    <section className="container">
      <h2 className="text-3xl font-medium text-primaryColor text-center">
        Trending Products
      </h2>
      <ProductList data={data} />
    </section>
  );
};
