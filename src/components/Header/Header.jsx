import React from "react";
import "./header.css";
import image from "./RickyMorty.jpeg";

const Header = () => {
    return (
        <div className="Header">
            <h1> !!!Personajes de Rick y Morty!!!! </h1>
            <img src={image} alt="Rick-and-Morty.png" />
        </div>
    );
};

export default Header;

