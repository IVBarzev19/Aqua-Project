import "./App.css";
import CardsGrid from "./components/CardsGrid";
import PanelGrid from "./components/PanelGrid";
import MainIndent from "./components/MainIndent";
function App() {
  return (
    <div className="App">
      <MainIndent />
      <CardsGrid />
      <PanelGrid />
    </div>
  );
}

export default App;
