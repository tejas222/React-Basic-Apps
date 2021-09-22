import "./App.css";
import JSONDATA from "./Cars.json";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="app">
      <SearchBar data={JSONDATA} />
    </div>
  );
}

export default App;
