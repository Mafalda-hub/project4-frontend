import React from 'react';
import { useParams } from 'react-router-dom';

import { getSingleTattoo } from '../lib/api';

const SingleTattoo = () => {
  const { tattooId } = useParams();
  const [tattoo, setTattoo] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleTattoo(tattooId);
        setTattoo(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [tattooId]);

  return (
    <section className="st_section">
      <div className="st_container">
        {!tattoo ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="square">
              <figure>
                <img src={tattoo.image} alt={tattoo.name} />
              </figure>
              <h2 className="title">{tattoo.name}</h2>
              <div className="description">
                <p>{tattoo.description}</p>
              </div>
              <div className="artist">{tattoo.artist.name}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleTattoo;
