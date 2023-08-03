// import "./App.css";
// import { NavBar } from "./components/navBar/navBar";
// import { Carwidget } from "./components/navBar/Carwidget";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// //import CategoryPage from "./CategoryPage";
// import Chamarras from "./components/Chamarras/Chamarras"; // Asegúrate de importar el componente correctamente
// import Sudaderas from "./components/Sudaderas/Sudaderas";

// //Importar Header

// import Header from "./components/Header/Header";

// //Importar páginas

// import HomePage from "./Paginas/Home/HomePage";
// import CategoryPage from "./Paginas/CategoryPage/CategoryPage";
// import ItemPage from "./Paginas/ItemPage/ItemPage";
// import UsersPage from "./Paginas/UsersPage/UsersPage";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Header title="The Street Store" />
//         <NavBar />
//         <Carwidget />
//       </div>

//       <div>
//         <Routes>
//           <Route exact path="/" element={<HomePage />} />
//           <Route exact path="/category/:id" element={<CategoryPage />} />
//           <Route exact path="/item/:id" element={<ItemPage />} />
//           <Route exact path="/users" element={<UsersPage />} />
//           <Route exact path="/" component={CategoryPage} />
//           <Route path="/Chamarras" component={Chamarras} />
//           <Route path="/Sudaderas" component={Sudaderas} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import "./App.css";
// import { NavBar } from "./components/navBar/navBar";
// import { Carwidget } from "./components/navBar/Carwidget";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Chamarras from "./components/Chamarras/Chamarras"; // Asegúrate de importar el componente correctamente
// import Sudaderas from "./components/Sudaderas/Sudaderas";

// //Importar Header

// import Header from "./components/Header/Header";

// //Importar páginas

// import HomePage from "./Paginas/Home/HomePage";
// import CategoryPage from "./Paginas/CategoryPage/CategoryPage";

// import ItemPage from "./Paginas/ItemPage/ItemPage";
// import UsersPage from "./Paginas/UsersPage/UsersPage";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Header title="The Street Store" />
//         <NavBar />
//         <Carwidget />
//       </div>

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/category/:id" element={<CategoryPage />} />
//         <Route path="/item/:id" element={<ItemPage />} />
//         <Route path="/users" element={<UsersPage />} />
//         <Route path="/Chamarras" element={<Chamarras />} />
//         <Route path="/Sudaderas" element={<Sudaderas />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { Carwidget } from "./components/navBar/Carwidget";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Chamarras from "./components/Chamarras/Chamarras";
import Sudaderas from "./components/Sudaderas/Sudaderas";

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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<CategoryPage />}>
          <Route path="Chamarras" element={<Chamarras />} />
          <Route path="Sudaderas" element={<Sudaderas />} />
        </Route>
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
