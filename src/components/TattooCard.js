import React from 'react';
import { Link } from 'react-router-dom';

// ! CADA QUADRADINHO DA PAG PRINCIPAL

const TattooCard = ({ id, artist, name, image }) => {
  return (
    <div>
      <Link to={`/tattoos/${id}`}>
        <div>
          <div>
            <h2>{name}</h2>
          </div>
          <div>
            <figure>
              <img src={image} alt={artist} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TattooCard;
