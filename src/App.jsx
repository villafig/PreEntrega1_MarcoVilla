import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Paginas/Home/HomePage";
import CategoryPage from "./Paginas/CategoryPage/CategoryPage";
import UsersPage from "./Paginas/UsersPage/UsersPage";
import Chamarras from "./components/Chamarras/Chamarras";
import Sudaderas from "./components/Sudaderas/Sudaderas";
import ProductDetailPage from "./Paginas/ProductDetailPage/ProductDetailPage";
import Carwidget from "./components/Cardwidget/Carwidget";

const App = () => {
  const [numProductos, setNumProductos] = useState(0);
  const [totalPrecio, setTotalPrecio] = useState(0);

  return (
    <Router>
      <div className="App">
        <Header title="The Street Store" />
        <NavBar />
        <Carwidget numProductos={numProductos} totalPrecio={totalPrecio} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setNumProductos={setNumProductos}
              setTotalPrecio={setTotalPrecio}
            />
          }
        />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/chamarras" element={<Chamarras />} />
        <Route path="/sudaderas" element={<Sudaderas />} />
        <Route
          path="/item/:id"
          element={
            <ProductDetailPage
              setNumProductos={setNumProductos}
              setTotalPrecio={setTotalPrecio}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
