import "./App.css";
import Movies from "./Movies";
import JSONDATA from "./movies.json";
function App() {
  return (
    <div className="App">
      <Movies data={JSONDATA} />
    </div>
  );
}

export default App;
