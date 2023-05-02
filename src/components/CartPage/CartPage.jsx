import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice/cartSlice";
import HeaderNew from "../HeaderNew/HeaderNew";
import EmptyBlock from "../EmptyBlock/EmptyBlock";

const CartPage = () => {
  const { totalPrice, products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemoveFromCart(product) {
    dispatch(removeFromCart(product));
  }

  function handleAddProductCount(product) {
    dispatch(addToCart(product));
  }

  return (
    <div>
      <div className="wrapper">
        <HeaderNew />
        {products.length === 0 ? (
          <EmptyBlock />
        ) : (
          <div className="flex lg:flex-row flex-col-reverse justify-between  mt-10">
            <div className="flex flex-col mt-10">
              <div className="flex items-center gap-4 lg:gap-8 underline sm:text-2xl text-lg ">
                <p className="text-text_color font-semibold w-[160px]">
                  Image:
                </p>
                <p className="text-text_color font-semibold w-[260px]">
                  Title:
                </p>
                <p className="text-text_color font-semibold w-[120px]">
                  Price:
                </p>
                <p className="text-text_color font-semibold w-[120px] sm:block hidden">
                  Amount:
                </p>
              </div>
              {products.map((item) => {
                return (
                  <div className="flex items-center gap-4 lg:gap-8 mt-4  font-semibold">
                    <img
                      className="max-w-[160px] max-h-[120px] object-cover"
                      src={item.image}
                      alt="img_item"
                    />
                    <p className="text-text_color sm:text-xl text-lg font-medium w-[260px]">
                      {item.title}
                    </p>
                    <p className="text-text_color sm:text-xl text-base w-[120px]">
                      {item.price}
                    </p>
                    {/* <div
                onClick={() => handleRemoveFromCart(item.id, item.price)}
                className=" cursor-pointer px-4 py-1 text-white font-medium bg-red-500 rounded"
              >
                Delete
              </div> */}
                    <div className=" justify-between w-[120px] sm:flex hidden">
                      <button
                        onClick={() =>
                          handleRemoveFromCart({
                            id: item.id,
                            price: item.price,
                          })
                        }
                        className="w-10 bg-red-500 flex items-center justify-center text-xl rounded-l-[24px] pl-1 font-medium"
                      >
                        {item.count === 1 ? (
                          <img
                            className="w-6"
                            src="/images/trash.svg"
                            alt="trash"
                          />
                        ) : (
                          <span className="pl-1">-</span>
                        )}
                      </button>

                      <span className="flex items-center px-2 ">
                        {item.count}
                      </span>
                      <button
                        onClick={() =>
                          handleAddProductCount({
                            id: item.id,
                            price: item.price,
                          })
                        }
                        className="w-10 flex items-center justify-center text-xl rounded-r-[24px] font-medium"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
              {/* <div className="flex items-center gap-4 lg:gap-8 mt-4">
              <img
                className="w-[160px] h-[120px] object-cover"
                src="/images/item1.png"
                alt=""
              />
              <h3 className="text-text_color font-medium w-[260px]">
                Asd
              </h3>
              <p className="text-center text-text_color text-xl w-[120px]">
                asd
              </p>
            </div> */}
            </div>
            <div className=" mt-10">
              <div className="flex flex-row items-center justify-between max-w-[264px]">
                <h3 className="text-text_color font-medium text-2xl">
                  Total Price:
                </h3>
                <span className="font-normal text-3xl ml-2">
                  {totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="rounded text-base h-10 mt-6">Buy</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
