import { useState } from 'react'
import "./App.css";
import { NavBar } from './components/navBar/navBar'
import { Carwidget } from './components/navBar/Carwidget'
import { ItemListContainer } from './components/navBar/ItemListContainer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


//Importar Header

import Header from "./components/Header/Header";
import ListUser from "./components/ListUser/ListUser";

//Importar páginas

import HomePage from "./Paginas/Home/HomePage"
import ContactPage  from "./Paginas/Contact/contactPage"
import DeadPage from "./Paginas/Dead/deadPage"
import LivePage from "./Paginas/Live/LivePage"


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} /> 
          <Route exact path="/contact" element={< ContactPage/>} />
          <Route exact path="/dead" element={<DeadPage />} />
          <Route exact path="/live" element={<LivePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App




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


