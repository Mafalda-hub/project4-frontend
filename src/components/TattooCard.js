import React from 'react';
import { Link } from 'react-router-dom';

const TattooCard = ({ _id, artist, name, description, image }) => {
  return (
    <div>
      <Link to={`/tattoos/${_id}`}>
        <div>
          <div>
            <h2>{name}</h2>
          </div>
          <div>
            <figure>
              <img src={image} alt={artist} />
            </figure>
          </div>
          <div>
            <h5>{description}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TattooCard;
