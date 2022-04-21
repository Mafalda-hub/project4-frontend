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
            <h2 className="title">{tattoo.name}</h2>
            <hr />
            <div className="columns">
              <figure className="image">
                <img src={tattoo.image} alt={tattoo.name} />
              </figure>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleTattoo;
