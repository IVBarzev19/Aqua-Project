import "./App.css";
import CardsGrid from "./components/CardsGrid";
import PanelGrid from "./components/PanelGrid";
import MainIndent from "./components/MainIndent";
import Preloader from "./components/Preloader";
function App() {
  return (
    <div className="App">
      <Preloader />
      <MainIndent />
      <CardsGrid />
      <PanelGrid />
    </div>
  );
}

export default App;
