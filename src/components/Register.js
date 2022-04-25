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

            <input type="button" type="submit" value="Register" />
            <br />
            <a href="#">Cant log in?</a>

            {/* <button type="submit" className="r_button">
              Register
            </button> */}
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

// import React from 'react';
// import { registerUser } from '../lib/api';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const navigate = useNavigate();

//   const [user, setUser] = React.useState({
//     username: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//   });

//   function handleChange(event) {
//     setUser({ ...user, [event.target.name]: event.target.value });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const getData = async () => {
//       try {
//         await registerUser(user);
//         navigate('/login');
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getData();
//   }

//    return (

//    )
//     <section className="form-section">
//       <div className="register-hero">
//         <form className="register-form" onSubmit={handleSubmit}>
//           <div className="field">
//             <label className="label">Username</label>
//             <div className="control">
//               <input
//                 className="input"
//                 placeholder="Username"
//                 name="username"
//                 onChange={handleChange}
//                 value={user.username}
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Email</label>
//             <div className="control">
//               <input
//                 className="input"
//                 placeholder="Email"
//                 name="email"
//                 onChange={handleChange}
//                 value={user.email}
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Password</label>
//             <div className="control">
//               <input
//                 type="password"
//                 className="input"
//                 placeholder="Password"
//                 name="password"
//                 onChange={handleChange}
//                 value={user.password}
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Password Confirmation</label>
//             <div className="control">
//               <input
//                 type="password"
//                 className="input"
//                 placeholder="Password Confirmation"
//                 name="password_confirmation"
//                 onChange={handleChange}
//                 value={user.password_confirmation}
//               />
//             </div>
//           </div>
//           <div className="field">
//             <button type="submit" className="button is-fullwidth is-warning">
//               Register Me!
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Register;
