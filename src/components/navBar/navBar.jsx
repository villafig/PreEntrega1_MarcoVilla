import React from "react";
import { Carwidget } from "./Carwidget";
import Live from "../../Paginas/Live/LivePage";

export const NavBar = ({greetings}) => {

    return <nav>
            <ul style={{display: "flex", justifyContent:"space-around"}}>  
                <il><a href="/">Home</a></il>
                <il><a href="/contact">Contact</a></il>
                 <il><a href="/live">Alive</a></il>
                 <il><a href="/dead">Dead</a></il>
            </ul>
     </nav>
} 

