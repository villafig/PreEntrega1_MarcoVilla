import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardUser from '../CardUser/CardUser';
import './ListUser.css';

const ListUser = ({status}) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios('http://rickandmortyapi.com/api/character').then((json) => {
      let filteredChars = json.data.results
      if (status) filteredChars = filteredChars.filter(char => char.status === status)
      setChars(filteredChars);
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



