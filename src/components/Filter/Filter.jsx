import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="lg:flex hidden justify-between gap-13 items-center p-4 bg-main mb-5">
      <div className="filter__item">Квадроциклы</div>
      <div className="filter__item">Катера</div>
      <div className="filter__item">Гидроциклы</div>
      <div className="filter__item">Лодки</div>
      <div className="filter__item">Вездеходы</div>
      <div className="filter__item">Снегоходы</div>
      <div className="filter__item">Двигатели</div>
      <div className="filter__item">Запчасти</div>
    </div>
  );
};

export default Filter;
