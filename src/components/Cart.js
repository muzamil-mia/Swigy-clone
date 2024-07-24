import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import CartItems from "./CartItems";
import BillDetails from "./BillDetails";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  return cartItems.length === 0 ? (
    <div>
      <div className=" h-[800px] border border-2 flex items-center justify-center">
        <div className=" mt-5">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt=""
          />
          <h2
            className="text-center
      pt-4 pb-4 mt-4 text-3xl font-bold"
          >
            Your cart is empty
          </h2>
          <div className="flex justify-center mt-8">
            <Link
              to="/"
              className="border-2 border-orange-500 px-4 py-2 text-4xl bg-orange-500 text-white"
            >
              SEE RESTAURANTS NEAR YOU
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center border border-red-400">
      <div className="flex flex-col border border-2  min-h-[600px] mt-5 mb-5 shadow-lg">
        {cartItems.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
        <BillDetails/>
        <div className="flex justify-center">
        <Link
              to="/"
              className="border-2 border-orange-500 px-4 py-2 text-xl bg-orange-500 text-white m-2 rounded-lg hover:text-amber-100"
            >
              CHECKOUT
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
