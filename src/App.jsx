import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importar Header

import Header from "./components/Header/Header";

//Importar páginas

import HomePage from "./Paginas/Home/HomePage";
import CategoryPage from "./Paginas/CategoryPage/CategoryPage";
import ItemPage from "./Paginas/ItemPage/ItemPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/category/:id" element={<CategoryPage />} />
          <Route exact path="/item/:id" element={<ItemPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

//function App() {
//  const [count, setCount] = useState(0)

// return (
// <Router>
// <h1 className='Titulo'>ECommerce</h1>
// <NavBar></NavBar>
// <ItemListContainer className='items' greetings={"Lista de Items"}></ItemListContainer>
// </Router>
// )
// }
