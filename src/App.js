
import About from "./components/about";
import Products from "./components/products"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function App() {
  return (
   <Router>
     <nav>
       <Link to="/about">About page</Link>
       <br/>
       <Link to="/products">Products page</Link>
     </nav>
     <Routes>
       <Route path="/about" element={<About/>}/>
       <Route path="/products" element={<Products/>}/>
     </Routes>
   </Router>
  );
}

export default App;
