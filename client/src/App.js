import './App.css';
import Main from "./views/Main.js";
import ProductDetails from './views/ProductDetails';
import ProductUpdate from './views/ProductUpdate';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ProductDetails path="/products/:id"/>
        <ProductUpdate path="/products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
