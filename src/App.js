import About from "./components/about";
import Products from "./components/products";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";
function App() {
  return (
    <Router>
      <nav>
        <Link target="_blank" to="/">
          Home
        </Link>
        <br />
        <Link to="/about">About page</Link>
        <br />
        <Link to="/products">Products page</Link>
        <br/>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile/:username" element={<Profile/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div>This is the footer</div>
    </Router>
  );
}

export default App;
