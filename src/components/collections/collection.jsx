import React from "react";
import "./collections.scss";
import { default as search } from "./../../img/collection/search.svg";
import { default as jpg1 } from "./../../img/collection/1.jpg";
import Card from "../card/Card";

const sneakers = [
  {
    img: {
      image: { jpg1 },
    },
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    url: "./../../img/collection/1.jpg",
    name: " Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    url: "./../../img/collection/1.jpg",
    name: " Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    url: "./../../img/collection/1.jpg",
    name: " Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    url: "./../../img/collection/1.jpg",
    name: " Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
];

const Collections = () => {
  return (
    <>
      <div className="collection">
        <div className="collection__top">
          <h3 className="collection__title">Все кросовки</h3>
          <div className="collection__search-block">
            <img className="collection__search-btn" src={search} alt="search" />
            <input
              className="collection__search-input"
              type="search"
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="collection__wrapper">
          {sneakers.map((el, index) => (
            <Card
              
              name={el.name}
              price={el.price}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Collections;
