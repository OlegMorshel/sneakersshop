import React, {useEffect, useState} from "react";
import styles from "./collections.module.scss";
import { default as search } from "./../../img/collection/search.svg";
import Card from "../card/Card";
import Preloader from "../other/Preloader";



const Collections = ({addItemDrawer, removeItemCart}) => {


  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(()=>{
    setIsFetching(true);

    fetch("https://6204c14dc6d8b20017dc36cf.mockapi.io/sneakers").then(
        res => res.json()
    ).then(res => setItems(res))

    setIsFetching(false);
  }, [])


  const addCartDrawer = ( obj ) => {
    addItemDrawer(obj);
  }

  const removeItem = ( obj ) => {
    removeItemCart(obj);
  }



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
          {
            isFetching ? <Preloader/>

            :
                items.map((el) => (
                <Card
              url={el.image}
              title={el.title}
              price={el.price}
              key={el.id}
              id={el.id}
              onPlus={ (obj) => addCartDrawer(obj)}
              removeItemCart={ (obj) => removeItem( obj )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Collections;
