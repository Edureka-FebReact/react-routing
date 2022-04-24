
import About from "./components/about";
import Products from "./components/products"
import ErrorPage from "./components/ErrorPage";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
   <Router>
     <nav>
       <Link to="/">Home</Link>
       <br/>
       <Link to="/about">About page</Link>
       <br/>
       <Link to="/products">Products page</Link>
     </nav>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="*" element={<ErrorPage/>}/>
     </Routes>
   </Router>
  );
}

export default App;
