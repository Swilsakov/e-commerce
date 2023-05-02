import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";

const Card = (props) => {
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(
      addToCart({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        count: 1,
      })
    );
  }

  return (
    <div className="card transition-all text-center bg-white p-4 relative">
      <div className="card__like">
        <img src="/images/likeGoods.svg" alt="" />
      </div>
      <img className="card__image" src={props.image} alt="" />
      <p className="mb-6 text-lg text-text_color">{props.title}</p>
      <p className=" text-3xl text-black">{props.price}$</p>
      <div
        onClick={handleAddToCart}
        className="absolute bottom-0 right-0 bg-blue-600 py-1 px-2 rounded-tl-lg cursor-pointer"
      >
        <img src="/images/cart-white.svg" alt="" />
      </div>
      <Link to={`${props.id}`}>
        <div className="show__product absolute left-1/2 top-1/2 bg-white p-3 rounded-sm -translate-x-1/2 -translate-y-1/2 scale-0 transition-all cursor-pointer">
          Посмотреть товар
        </div>
      </Link>
    </div>
  );
};

export default Card;
