import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex justify-center bg-main py-11 mt-40">
      <div className="flex justify-between">
        <div className="footer__left_block ">
          <p className="text-black text-sm mb-8 font-bold max-w-xs">
            Подпишитесь на нашу рассылку и узнавайте о акция быстрее
          </p>
          <form action="submit">
            <input
              className="h-8 focus:outline-none"
              type="text"
              placeholder="Введите ваш e-mail:"
            />
            <button className="bg-blue-600 text-white p-1">ОТПРАВИТЬ</button>
          </form>
        </div>
        <div className="footer__center_block md:block hidden">
          <p className="footer__heading">Информация</p>
          <nav className="footer__list">
            <p className="footer__item">О компании</p>
            <p className="footer__item">Контакты</p>
            <p className="footer__item">Акции</p>
            <p className="footer__item">Магазины</p>
          </nav>
        </div>
        <div className="footer__center_block md:block hidden ">
          <p className="footer__heading">Интернет-магазин</p>
          <nav className="footer__list">
            <p className="footer__item">Доставка и самовывоз</p>
            <p className="footer__item">Оплата</p>
            <p className="footer__item">Возврат-обмен</p>
            <p className="footer__item">Новости</p>
          </nav>
        </div>
        <div className="lg:flex hidden gap-7 items-center ml-24 ">
          <img className="w-8 h-8" src="/images/footer/instagram.svg" alt="" />
          <img className="w-8 h-8" src="/images/footer/vk.svg" alt="" />
          <img className="w-8 h-8" src="/images/footer/facebook.svg" alt="" />
          <img className="w-8 h-8" src="/images/footer/youtube.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
