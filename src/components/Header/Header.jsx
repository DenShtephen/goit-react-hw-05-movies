import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import styled from 'styled-components';
import './header.css';

const StyledLink = styled(NavLink)`
  color: grey;

  &.active {
    color: #87ceeb;
  }
`;

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="list">
            <li className="item">
              <StyledLink to="/">
                <span className="title">Home</span>
              </StyledLink>
            </li>
            <li className="item">
              <StyledLink to="/movies">
                <span className="title">Movies</span>
              </StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
