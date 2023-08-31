import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="list">
            <li className="item">
              <NavLink to="/">
                <span className="title">Home</span>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/movies">
                <span className="title">Movies</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
