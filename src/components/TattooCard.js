import React from 'react';
import { Link } from 'react-router-dom';

// ! CADA QUADRADINHO DA PAG PRINCIPAL

const TattooCard = ({ id, artist, name, image }) => {
  return (
    <div className="tc_container">
      <Link to={`/tattoos/${id}`}>
        <div className="tc_square">
          <div className="tc_card">
            <figure>
              <img src={image} alt={artist} className="tc_card-image" />
              <h3 className="tc_card-title">{name}</h3>
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TattooCard;
