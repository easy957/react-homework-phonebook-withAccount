import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleChange}
          value={email}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          value={password}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default RegisterPage;
