import { ProductCart } from "./ProductCart";

export const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
      {data?.map((item, idx) => (
        <ProductCart key={idx} item={item} />
      ))}
    </div>
  );
};
