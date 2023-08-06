import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importar Header
import Header from "./components/Header/Header";

//Importar páginas
import HomePage from "./Paginas/Home/HomePage";
import CategoryPage from "./Paginas/CategoryPage/CategoryPage";
import UsersPage from "./Paginas/UsersPage/UsersPage";
import ProductDetail from "./components/ProductDetail//ProductDetail";
import Chamarras from "./components/Chamarras/Chamarras";
import Sudaderas from "./components/Sudaderas/Sudaderas";
import ProductDetailPage from "./Paginas/ProductDetailPage/ProductDetailPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header title="The Street Store" />
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/chamarras" element={<Chamarras />} />
        <Route path="/sudaderas" element={<Sudaderas />} />
        <Route path="/item/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
