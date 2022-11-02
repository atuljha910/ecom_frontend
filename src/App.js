//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a style = {{"padding-left": "120px"}} class="navbar-brand" href="#">EbookSeller</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Books</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Contact</a>
        </li>        
      </ul>
      
      <div style = {{"margin-top": "12px", "padding-left": "50px"}} class="input-group mb-3" >
        <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Choose Genre</label>
        </div>
        <select style = {{"width":"500px"}} class="custom-select" id="inputGroupSelect01">
          <option selected>All Books</option>
          <option value="1">Sci-fi</option>
          <option value="2">Self help</option>
          <option value="3">Horror</option>
        </select>
      </div>
      
    </div>
  </div>
</nav>
    </>
  );
}

export default App;
