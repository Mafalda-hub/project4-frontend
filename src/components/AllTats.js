import React from 'react';
import TattooCard from './TattooCard';
import { getAllTattoos } from '../lib/api';

const AllTats = () => {
  const [tattoos, setTattoos] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllTattoos();
        setTattoos(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {!tattoos ? (
            <p>Loading...</p>
          ) : (
            tattoos.map((tattoo) => <TattooCard key={tattoo.id} {...tattoo} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default AllTats;
