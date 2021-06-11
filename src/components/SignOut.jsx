import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { actions } from '../store';

export const SignOut = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(state => state.loggedUser);

  const handleUserReset = () => {
    dispatch(actions.signOut())
  }

  useEffect(() => {
    if (user) {
      history.push('/profile');
    }
  }, [user])


  return (
    <>
      <div>user {user.username}</div>
      <button onClick={handleUserReset}>Sign Out</button>
    </>
  )
}