import cn from 'classnames';

import { Link, Outlet, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { StateContext } from '../store/GlobalContextProvider';

export const TabsPage: React.FC = () => {
  const { tabs } = useContext(StateContext);
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === tabId })}
              key={tab.id}
            >
              <Link to={`${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </>
  );
};
