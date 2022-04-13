// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterContainer from "./views/CounterContainer";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import Nav from "./components/Nav/Nav";
import Products from "./views/Shop";
import About from "./views/About";
import OutPage from "./views/OutPage";

// Ajax and useContext hook should be implemented later
// infinity scroll
//TODO: the profile need more adjustment not finished yet
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/counter" element={<CounterContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<OutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
