import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import { validateRequest } from '../Server/api';

export const SignIn = () => {
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError('');
  }

  const loggedUserId = useSelector(state => state.loggedUserId);

  const submitHandler = (event) => {
    event.preventDefault()

    const userData = {
      email: email,
      password: password,
    }

    dispatch(validateRequest(userData));
  }

  if (loggedUserId) {
    history.push('/profile');
  }

  return (
    <form onSubmit={submitHandler} style={{ margin: '0 300px'}}>
      <div>
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div>
          <input
            value={email}
            className="form-control"
            placeholder="enter your email"
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div>
        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div>
          <input
            type="password"
            className="form-control"
            placeholder="enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {error && <span>{error}</span>}
        </div>
      </div>
      <button className="btn btn-primary mt-5" type="submit">sign in</button>
      </form>
  )
}
