import Cuerpo from "./components/Cuerpo";
import ItemlistContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CardWidget from "./components/CardWidget";

function App() {
  return (
    <div>
      <NavBar />
      <hr />
      <Cuerpo />
      <ItemlistContainer mensaje="Por el momento no se encuentran productos"/>
    </div>
  );
}

export default App;