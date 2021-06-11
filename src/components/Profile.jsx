import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { getUser } from '../Server/api';

export const Profile = () => {
  const loggedUserId = useSelector(state => state.loggedUserId);
  const dispatch = useDispatch();
  const history = useHistory()

  if (!loggedUserId) {
    history.push('/login');
  }

  const loggedUser = useSelector(state => state.loggedUser);

  const receiveLoggedUser = () => {
    dispatch(getUser(loggedUserId));

    console.log(loggedUser);
  }

  useEffect(() => {
    receiveLoggedUser()
  }, [loggedUserId])

  console.log(loggedUser);
  if (!loggedUser) {
    return <p>Loading...</p>
  }

  console.log(loggedUser);

  return (
    <div>
      <p>{loggedUser.city}</p>
      <ul>
        <p>Знание языков:</p>
        {loggedUser.languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <ul>
        {loggedUser.social.map(social => (
        <li style={{listStyleType: 'none'}} key={social.link}>
          <a href={social.link} target="_blank">{social.label}</a>
        </li>
        ))} 
        </ul>
    </div>
  )
};
