import React from 'react';
import { createTat } from '../lib/api';
import { useNavigate } from 'react-router-dom';

function NewTat() {
  const navigate = useNavigate();

  const [tattoo, setTattoo] = React.useState({
    name: '',
    description: '',
    image: '',
    artist: '',
  });

  function handleChange(event) {
    setTattoo({ ...tattoo, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createTat(tattoo);
        navigate('/');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={tattoo.name}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                  value={tattoo.description}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Image URL"
                  name="image"
                  onChange={handleChange}
                  value={tattoo.image}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Artist</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Artist...."
                  name="artist"
                  onChange={handleChange}
                  value={tattoo.artist}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-warning is-fullwidth">
                Post your tattoo!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewTat;
