import styles from "./App.module.scss";
import BasketRight from "./components/basketright/basketright";
import Collections from "./components/collections/collection";
import Header from "./components/header/header";
import {useState} from "react";
import Preloader from "./components/other/Preloader";

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const openDrawer = () => {
        setIsOpen(true);
    }
    const closeDrawer =() => {
        setIsOpen(false);
    }

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
          {isOpen && <BasketRight closeDrawer={closeDrawer}/>}

          <Header openDrawer={openDrawer} />

          <Collections/>
      </div>
    </div>
  );
}

export default App;
