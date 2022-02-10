import styles from "./App.module.scss";
import BasketRight from "./components/basketright/basketright";
import Collections from "./components/collections/collection";
import Header from "./components/header/header";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
				<BasketRight />
        <Header />
				<Collections/>
      </div>
    </div>
  );
}

export default App;
