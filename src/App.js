import "./App.css";
import Info from "./components/Info/Info";
import ListCountry from "./components/ListCountry/ListCountry";
import Map from "./components/Map/Map";

const mouseTarget = document.getElementById("mouseTarget");
if (mouseTarget)
  mouseTarget.addEventListener("mouseenter", (e) => {
    alert("1");
  });

function App(props) {
  return (
    <div className="App">
      <ListCountry ListCountryData={props.state.ListCountryData} />
      <Info />
      <Map MapData={props} />
    </div>
  );
}

export default App;
