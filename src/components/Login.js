import React from 'react';
import { loginUser } from '../lib/api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await loginUser(user);

        navigate('/');
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getData();
  }
  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const getData = async () => {
  //     try {
  //       const { data } = await loginUser(user);
  //       localStorage.setItem('accessToken', data.token);
  //       navigate('/');
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getData();
  // }

  return (
    <section className="l_form-section">
      <div>
        <form onSubmit={handleSubmit} className="form_container">
          <p>Login</p>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
          <br />
          <div>
            <input type="button" type="submit" value="Sign in" />
            <br></br>
            <a href="#">Forgot Password?</a>

            {/* <button type="submit" className="l_button">
              Log Me In!
            </button> */}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
