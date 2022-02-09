import "./App.scss";
import BasketRight from "./components/basketright/basketright";
import Collections from "./components/collections/collection";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
				<BasketRight />
        <Header />
				<Collections/>
      </div>
    </div>
  );
}

export default App;
