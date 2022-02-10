import React from "react";
import styles from "./collections.module.scss";
import { default as search } from "./../../img/collection/search.svg";
import Card from "../card/Card";
import {default as image1} from './../../img/collection/1.jpg';
import {default as image2} from './../../img/collection/2.jpg';
import {default as image3} from './../../img/collection/3.jpg';
import {default as image4} from './../../img/collection/4.jpg';
import {default as image5} from './../../img/collection/5.jpg';

const sneakers = [
  {
    url: image1,
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    url: image2,
    name: " Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    url: image3,
    name: " Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    url: image4,
    name: " Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    url: image5,
    name: " Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
];

const Collections = () => {
  return (
    <>
      <div className={styles.collection}>
        <div className={styles.collection__top}>
          <h3 className={styles.collection__title}>Все кросовки</h3>
          <div className={styles.collection__search_block}>
            <img className={styles.collection__search_btn} src={search} alt="search" />
            <input
              className={styles.collection__search_input}
              type="search"
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className={styles.collection__wrapper}>
          {sneakers.map((el, index) => (
            <Card
              url={el.url}
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
