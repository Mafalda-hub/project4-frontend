import React from 'react';
import { createTat } from '../lib/api';
import { useNavigate } from 'react-router-dom';

function NewTat() {
  const navigate = useNavigate();

  const [tattoo, setTattoo] = React.useState({
    name: '',
    description: '',
    image: '',
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
    <section className="nt_form-section">
      <div>
        <form onSubmit={handleSubmit} className="form_container">
          <p>Share your own</p>
          <input
            className="input"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={tattoo.name}
          />
          <br />
          <input
            className="input"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={tattoo.description}
          />
          <br />
          <input
            className="input"
            placeholder="Image URL"
            name="image"
            onChange={handleChange}
            value={tattoo.image}
          />
          <br />

          {/* <div className="field">
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
          </div> */}
          <input type="button" type="submit" value="Post your tattoo!" />

          {/* <button type="submit" className="button is-warning is-fullwidth">
            Post your tattoo!
          </button> */}
        </form>
      </div>
    </section>
  );
}

export default NewTat;
