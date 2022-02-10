import React from "react";
import styles from './basketright.module.scss';
import {default as sneakers } from './../../img/collection/1.jpg'
import main from './../../App.module.scss'

const BasketRight = () => {
	return (
    <div className={styles.basket}>
      <div className={styles.basket__overlay}>
        <div className={styles.basket__drawer}>
          <h2 className={styles.basket__title}>Корзина</h2>
          <div className={styles.basket__box}>
            <div className={styles.basket__item}>
              <img
                width={70}
                height={70}
                className={styles.basket__item_img}
                alt="sneakers img"
                src={sneakers}
              />
              <div className={styles.basket__item_text}>
                <p className={styles.basket__item_description}>
                  Мужские Кроссовки Nike Air Max 270
                </p>
                <span className={styles.basket__item_price}>12 999 руб.</span>
              </div>
              <svg
                className={styles.basket__item_clouse}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="7.5"
                  fill="white"
                  stroke="#DBDBDB"
                />
                <path
                  d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                  fill="#B5B5B5"
                />
              </svg>
            </div>
          </div>

          <div className={styles.basket__bottom}>
            <div className={styles.basket__bottom_total}>
              <span className={styles.basket__bottom_character}>Итого:</span>
              <span className={styles.basket__bottom_dashed}></span>
              <p className={styles.basket__bottom_price}>21 498 руб.</p>
            </div>
            <div className={styles.basket__bottom_total}>
              <span className={styles.basket__bottom_character}>Налог 5%:</span>
              <span className={styles.basket__bottom_dashed}></span>
              <p className={styles.basket__bottom_price}>1074 руб.</p>
            </div>
            <button className={`${styles.basket__button} ${main.mainBtn}`}>
              Оформить заказ
              <svg
                className={styles.basket__button_arrow}
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H14.7143"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.71436 1L14.7144 7L8.71436 13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketRight;