import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src="/images/logo.png" alt="logo" />
      <menu>
        <nav>
          <ul className="header__block">
            <li>
              <a className="header__link" href="/">
                Магазины
              </a>
            </li>
            <li>
              <a className="header__link" href="/">
                Акции
              </a>
            </li>
            <li>
              <a className="header__link" href="/">
                Доставка и оплата
              </a>
            </li>
          </ul>
        </nav>
      </menu>
      <div>
        <a className="header__cart" href="/">
          <img src="/images/cart-black.svg" alt="vector" />
        </a>
      </div>
    </div>
  );
};

export default Header;
