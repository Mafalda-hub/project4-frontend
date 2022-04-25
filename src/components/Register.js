import React from 'react';
import { registerUser } from '../lib/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [passwordConfirmationValue, setPasswordConfirmationValue] =
    React.useState('');

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmationValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser({
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      password_confirmation: passwordConfirmationValue,
    });
    navigate('/login');
  };

  return (
    <>
      <section className="r_form-section">
        <div>
          <form onSubmit={handleSubmit} className="form_container">
            <p>Register</p>

            <input
              type="text"
              placeholder="Username"
              value={usernameValue}
              onChange={handleUsernameChange}
            />
            <br />

            <input
              type="text"
              placeholder="Email"
              value={emailValue}
              onChange={handleEmailChange}
            />
            <br />

            <input
              type="password"
              placeholder="Password"
              value={passwordValue}
              onChange={handlePasswordChange}
            />
            <br />

            <input
              type="password"
              placeholder="Password Confirmation"
              value={passwordConfirmationValue}
              onChange={handlePasswordConfirmationChange}
            />
            <br />

            <input type="submit" value="Register" />
            <br />
            <a href="#">Cant log in?</a>
            <br />
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
