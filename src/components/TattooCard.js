import React from 'react';
import { Link } from 'react-router-dom';

// ! CADA QUADRADINHO DA PAG PRINCIPAL

const TattooCard = ({ id, artist, name, image }) => {
  return (
    <div className="tc_container">
      <Link to={`/tattoos/${id}`}>
        <div className="square">
          <p>{name}</p>
          <figure>
            <img src={image} alt={artist} />
          </figure>
        </div>
      </Link>
    </div>
  );
};

export default TattooCard;
