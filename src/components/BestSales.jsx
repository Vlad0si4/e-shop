import { ProductList } from "./ProductList";

export const BestSales = ({ data }) => {
  return (
    <section className="container mb-20">
      <h2 className="text-4xl font-bold text-primaryColor text-center pb-[20px]">
        Best Sales
      </h2>
      <ProductList data={data} />
    </section>
  );
};
