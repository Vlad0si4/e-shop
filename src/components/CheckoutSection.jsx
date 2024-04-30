import { useSelector } from "react-redux";
import { Button } from "./Button";
import { selectQuantity, selectTotal } from "../redux/slices/cartSelectors";

export const CheckoutSection = () => {
  const totalQt = useSelector(selectQuantity);
  const totalSum = useSelector(selectTotal);

  const totalOrder = totalSum + 10;

  return (
    <section className="container">
      <h2 className="text-center text-2xl font-medium mt-10">
        Billing Information
      </h2>
      <div className="flex flex-col  md:flex-row  gap-7 my-10 ">
        <form className="flex flex-col gap-5 w-full ">
          <input
            type="text"
            placeholder="Enter your name"
            className="border rounded-md p-3"
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="border rounded-md p-3"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="border rounded-md p-3"
          />
          <input
            type="text"
            placeholder="Street address"
            className="border rounded-md p-3"
          />
          <input
            type="text"
            placeholder="City"
            className="border rounded-md p-3"
          />
          <input
            type="text"
            placeholder="Postal code"
            className="border rounded-md p-3"
          />{" "}
          <input
            type="text"
            placeholder="County"
            className="border rounded-md p-3"
          />
        </form>
        <div className="flex flex-col items-center ">
          <div className="p-6 bg-primaryColor text-white border rounded-lg font-medium w-full md:w-[300px] ">
            <p className="text-sm pb-3">
              Total Quantity: <span>{totalQt} items</span>
            </p>
            <p className="text-sm pb-3">
              Subtotal: <span>$ {totalSum}</span>
            </p>
            <p className="text-sm mb-6 pb-2 border-b">
              Shipping: <span>$ 10</span>
            </p>
            {!totalSum ? (
              <p className="text-lg font-medium">
                Total Cost: <span>$ 0</span>
              </p>
            ) : (
              <p className="text-lg font-medium">
                Total Cost: <span>$ {totalOrder}</span>
              </p>
            )}
          </div>
          <Button desc="Place an order"></Button>
        </div>
      </div>
    </section>
  );
};
