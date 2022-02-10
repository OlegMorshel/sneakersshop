import React from "react";
import styles from "./header.module.scss";
import { default as basket } from "./../../img/header/basket.svg";
import { default as heart } from "./../../img/header/heart.svg";
import { default as profile } from "./../../img/header/profile.svg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__name}>
            <img
              width="40"
              heigth="40"
              src={require("./../../img/header/logo.png")}
              alt={"logo"}
            />
            <div>
              <h3 className={styles.header__title}>REACT SNEAKERS</h3>
              <p className={styles.header__subtitle}>Магазин лучших кроссовок</p>
            </div>
          </div>
          <div className={styles.header__profile}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}>
                <img className={styles.header__basket} width="18" height="18" src={basket} alt="basket" />
                <span className={styles.header__price}>1205 руб.</span>
              </li>
              <li className={styles.header__item}>
                <img width="20" height="20" src={heart} alt="heart" />
              </li>
              <li className={styles.header__item}>
                <img width="20" height="20" src={profile} alt="profile" />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
