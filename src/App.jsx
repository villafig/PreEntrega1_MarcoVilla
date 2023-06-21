import { useState } from 'react'
import "./App.css";
import { NavBar } from './components/navBar/navBar'
import { Carwidget } from './components/navBar/Carwidget'
import { ItemListContainer } from './components/navBar/ItemListContainer'

//Importar Header

import Header from "./components/Header/Header";
import ListUser from "./components/ListUser/ListUser";


const App = () => {
  return  (
    <div className="App">
    <Header />
    <ListUser />
    </div>
  );
};

export default App;


//Impotar React Router DOM

//import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

//Importar páginas



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

// export default App

