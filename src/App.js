import styles from "./App.module.scss";
import BasketRight from "./components/basketright/basketright";
import Collections from "./components/collections/collection";
import Header from "./components/header/header";
import  {useState} from "react";

function App() {

    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const openDrawer = () => {
        setIsOpen(true);
    }
    const closeDrawer =() => {
        setIsOpen(false);
    }

    const addCartItem = ( obj ) =>{

        const found = cartItems.some( el => el.url === obj.url);

        if(!found){
            setCartItems( prev => [...prev, obj]);
        }

    }

        const removeItemCart = ( obj ) => {
            let temp = [...cartItems];
            let newState = temp.filter(el => el.id !== obj.id)
            setCartItems(newState);
    }


  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
          {isOpen && <BasketRight closeDrawer={closeDrawer}
                                    cartItems={cartItems}/>}

          <Header openDrawer={openDrawer} />

          <Collections  addItemDrawer={addCartItem}
                        removeItemCart={removeItemCart}/>
      </div>
    </div>
  );
}

export default App;
