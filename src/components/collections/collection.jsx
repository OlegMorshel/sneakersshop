import React from "react";
import "./collections.scss";
import { default as search } from "./../../img/collection/search.svg";
import Card from "../card/Card";
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Collections;
