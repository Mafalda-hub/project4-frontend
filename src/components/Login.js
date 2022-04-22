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
        const { data } = await loginUser(user);
        localStorage.setItem('accessToken', data.token);
        navigate('/');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }
  return (
    <section className="l_form-section">
      <div className="login-hero">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="field">
            <label className="label">Email</label>
            <div>
              <input
                className="input"
                name="email"
                onChange={handleChange}
                value={user.email}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div>
              <input
                type="password"
                className="input"
                name="password"
                onChange={handleChange}
                value={user.password}
              />
            </div>
          </div>
          <div className="field">
            <button type="submit">Log Me In!</button>
          </div>
        </form>
      </div>
    </section>
    // <div className="login-box">
    //   <h2>Login</h2>
    //   <form>
    //     <div className="user-box">
    //       <input type="text" name="" required="" />
    //       <label>Username</label>
    //     </div>
    //     <div className="user-box">
    //       <input type="password" name="" required="" />
    //       <label>Password</label>
    //     </div>
    //     <a href="#">
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //       Submit
    //     </a>
    //   </form>
    // </div>
  );
}

export default Login;
