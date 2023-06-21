import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardUser from '../CardUser/CardUser';
import './ListUser.css';

const ListUser = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios('http://rickandmortyapi.com/api/character').then((json) => {
      setChars(json.data.results);
    });
  }, []);

  return (
    <div className="ListUser">
      <div className="Card-Lists">
        {chars.map((char) => (
          <div className="grid-item" key={char.id}>
            <CardUser char={char} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUser;



