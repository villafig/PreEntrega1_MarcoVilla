import React from "react";

export const ItemListContainer = ({greetings}) => {

    return <nav>
            <h2>{greetings}</h2>
            <ul style={{display:"flex", justifyContent: "space-around", alignItems: "center", width:"1000px"}}>
                <il>Item 1</il>
                <il>Item 2</il>
                <il>Item 3</il>
            </ul>
     </nav>
} 