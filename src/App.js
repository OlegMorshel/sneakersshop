import "./App.scss";
import Collections from "./components/collections/collection";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
				<Collections/>
      </div>
    </div>
  );
}

export default App;
