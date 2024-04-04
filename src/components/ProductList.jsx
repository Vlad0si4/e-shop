import { ProductCart } from "./ProductCart";

export const ProductList = ({ data }) => {
  return (
    <div className="flex gap-5">
      {data.map((item) => (
        <ProductCart item={item} />
      ))}
    </div>
  );
};
