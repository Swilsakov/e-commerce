import React, { useState } from "react";
import "./HeaderNew.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileMenu from "../MobileMenu/MobileMenu";

const HeaderNew = () => {
  const link = "text-xl";
  const [isShowMenu, setIsShowMenu] = useState(false);
  const count = useSelector((state) => state.cart.count);

  if (isShowMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  return (
    <div className="flex items-center justify-between mb-5">
      <div className="relative z-50">
        <Link to={"/"}>
          <img className="" src="/images/logo.png" alt="logo" />
        </Link>
      </div>
      <menu className="hidden sm:block">
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <a className={link} href="/">
                Магазины
              </a>
            </li>
            <li>
              <a className={link} href="/">
                Акции
              </a>
            </li>
            <li>
              <a className={link} href="/">
                Доставка и оплата
              </a>
            </li>
          </ul>
        </nav>
      </menu>
      <div className="relative z-50 flex gap-4 items-center">
        <Link to={"/cart"} className="pr-6">
          <img className="absolute" src="/images/cart-black.svg" alt="vector" />
          <span className=" relative bottom-[-12px] left-[24px] w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center">
            {count}
          </span>
        </Link>
        <div
          className="relative z-50"
          onClick={() => setIsShowMenu(!isShowMenu)}
        >
          <img
            className="w-9 h-9 sm:hidden cursor-pointer"
            src="/images/menu-icon.svg"
            alt="menu-icon"
          />
        </div>
      </div>
      {isShowMenu ? <MobileMenu /> : null}
    </div>
  );
};

export default HeaderNew;
