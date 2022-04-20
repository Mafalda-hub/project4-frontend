import React from 'react';
import { useParams } from 'react-router-dom';

import { getSingleTattoo } from '../lib/api';

const TattooShow = () => {
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
    <section className="section">
      <div className="container">
        {!tattoo ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="title has-text-centered">{tattoo.name}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={tattoo.image} alt={tattoo.name} />
                </figure>
              </div>
              <div className="column is-half">
                <hr />
                <p>{tattoo.description}</p>
                <hr />
                <h4 className="title is-4">Added By:</h4>
                <hr />
                <p>{tattoo.user.username}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TattooShow;
