import { ProductList } from "./ProductList";

export const Arrivals = ({ mobile, wireless }) => {
  const combinedData = [...mobile, ...wireless];
  return (
    <section className="container mb-20">
      <h2 className="text-4xl font-bold text-primaryColor text-center pb-[20px] ">
        New Arrivals
      </h2>
      <ProductList data={combinedData} />
    </section>
  );
};
