import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/CartWidget/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'bienvenidos'}/>
    </div>
  );
}

export default App;
