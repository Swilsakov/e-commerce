import React, { useEffect, useState } from "react";
import "./CardDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { useParams } from "react-router";
import HeaderNew from "../HeaderNew/HeaderNew";
import Footer from "../Footer/Footer";

const CardDetail = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(products.find((product) => product.id === +id));
  }, [id, products]);

  function handleAddToCart() {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        count: 1,
      })
    );
  }

  return (
    <div>
      <div className="wrapper">
        <HeaderNew />

        <div className="flex lg:flex-row lg:justify-center justify-between flex-col  gap-[100px]">
          <div className="flex justify-center flex-col lg:max-w-[500px] ">
            <p className="uppercase py-2 bg-blue-500 text-white rounded mb-5 max-w-[100px] flex justify-center">
              SALE
            </p>
            <div className="flex mx-auto max-w-[500px]">
              <img
                className=" object-cover mb-[20px] w-[100%] h-[100%] "
                src={product?.image}
                alt="item img"
              />
            </div>
            <p className="text-center text-gray-400 text-2xl line-through">
              9999.99 $
            </p>
            <p className="text-center text-text_color font-semibold text-4xl">
              {product?.price} $
            </p>
          </div>
          <div className="flex flex-col max-w-[570px]">
            <div>
              <h2 className="text-text_color font-semibold text-3xl mb-3">
                {product?.title}
              </h2>
              <p className="text-gray-400 text-sm">
                Код товара: {product?.id}{" "}
              </p>
            </div>
            <div className="max-w-[470px]">
              <h3 className=" text-xl text-text_color font-semibold mt-8 ">
                Характеристики
              </h3>
              <div className="mt-3 characters">
                <div className="">
                  <p className="row">Производитель</p>
                  <p className="row">Количество мест, шт: </p>
                  <p className="row">Мощность, л.с.</p>
                  <p className="row">Тип двигателя</p>
                  <p className="row">Год выпуска</p>
                </div>
                <div className="">
                  <p className="row">Канада</p>
                  <p className="row">3</p>
                  <p className="row">155</p>
                  <p className="row">Бензиновый</p>
                  <p className="row">2018</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="uppercase bg-blue-500 text-white rounded w-[177px] flex justify-center items-center mt-16 h-12 text-xs font-normal"
            >
              Купить
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardDetail;
