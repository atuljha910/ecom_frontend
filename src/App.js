//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';

function App() {
  return (
    <>
      <NavBar title = "eBookSeller"/>
      <div class = "container my-3">
      <Books/>
      </div>
      
    </>
  );
}

export default App;
