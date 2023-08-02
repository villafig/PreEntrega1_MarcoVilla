import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { Carwidget } from "./components/navBar/Carwidget";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importar Header

import Header from "./components/Header/Header";

//Importar páginas

import HomePage from "./Paginas/Home/HomePage";
import CategoryPage from "./Paginas/CategoryPage/CategoryPage";
import ItemPage from "./Paginas/ItemPage/ItemPage";
import UsersPage from "./Paginas/UsersPage/UsersPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header title="The Street Store" />
        <NavBar />
        <Carwidget />
      </div>

      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/category/:id" element={<CategoryPage />} />
          <Route exact path="/item/:id" element={<ItemPage />} />
          <Route exact path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
