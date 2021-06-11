import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css'

export const MainNavigation = () => {
  return (
    <nav>
      <ul className={'navigation__list'}>
        <li className='navigation__list-item'>
          <Link style={{ textDecoration: 'none'}} to="/">Home</Link>
        </li>
        <li className='navigation__list-item'>
          <Link style={{ textDecoration: 'none'}} to="/profile">Profile</Link>
        </li>
        <li className='navigation__list-item'>
          <Link style={{ textDecoration: 'none'}} to="/login">Login</Link>
        </li>
        <li className='navigation__list-item'>
          <Link style={{ textDecoration: 'none'}} to="/news">News</Link>
        </li>
      </ul>
    </nav>
  )
}