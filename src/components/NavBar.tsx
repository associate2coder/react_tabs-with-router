import { useCallback, useContext } from 'react';
import { StateContext } from '../store/GlobalContextProvider';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const NavBar: React.FC = () => {
  const { pages } = useContext(StateContext);

  const getLinkClass = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      cn('navbar-item', { 'is-active': isActive }),
    [],
  );

  return (
    <nav
      // eslint-disable-next-line max-len
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {pages.map(page => (
            <NavLink
              to={page.id === 'home' ? '/' : `/${page.id}`}
              key={page.id}
              className={getLinkClass}
            >
              {page.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
