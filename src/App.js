import React from "react";
import "./App.css";
import Filter from "./components/Filter/Filter";
import Card from "./components/Card/Card";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeaderNew from "./components/HeaderNew/HeaderNew";
import { useSelector } from "react-redux";

const App = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <div className="wrapper">
        {/* <Header /> */}
        <HeaderNew />
        <Filter />
        <div className="cards">
          {products.map((item) => {
            return (
              <Card
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
