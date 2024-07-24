import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useEffect } from "react";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  getCartTotal,
} from "../features/cartSlice";

const CartItems = ({ item }) => {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getCartTotal);
  }, [cartItems]);

  const dispatch = useDispatch();
  const { imageId, inStock, name, price, defaultPrice, id } = item;
  return (
    inStock > 0 && (
      <>
        <div className="min-h[200px] border border-1 m-2 flex justify-evenly">
          <div className="flex justify-between">
            <img
              src={CDN_URL + imageId}
              alt=""
              className="w-[180px] h-[100px] rounded-lg mb-2.5 object-cover"
            />
          </div>
          <div className="pl-4 ">
            <h2 className="text-xl font-bold pr-4">{name}</h2>
            <p className="text-lg mt-3 text-gray-500">
              ₹{price / 100 || defaultPrice / 100}
            </p>
          </div>
          <div className="flex items-center">
            <div className=" flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ml-4 mr-4">
              <button
                className="text-xl text-gray-count font-semibold text-red-500 font-bold"
                onClick={() => dispatch(decreaseItemQuantity(id))}
              >
                {" "}
                -{" "}
              </button>
              <span className="text-base text-green"> {inStock} </span>
              <button
                className="text-green text-xl text-green-500 font-bold"
                onClick={() => dispatch(increaseItemQuantity(id))}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default CartItems;
