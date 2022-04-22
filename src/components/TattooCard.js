import React from 'react';
import { Link } from 'react-router-dom';

// ! CADA QUADRADINHO DA PAG PRINCIPAL

const TattooCard = ({ id, artist, name, image }) => {
  return (
    <div className="tc_container">
      <Link to={`/tattoos/${id}`}>
        <div className="square">
          <div className="card">
            <figure>
              <img src={image} alt={artist} className="card-image" />
              <h3 className="card-title">{name}</h3>
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TattooCard;
