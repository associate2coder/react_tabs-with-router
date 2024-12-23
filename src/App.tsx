import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DispatchContext } from './store/GlobalContextProvider';
import { NavBar } from './components/NavBar';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const pages = [
  { id: 'home', title: 'Home', content: 'Home page' },
  { id: 'tabs', title: 'Tabs', content: 'Tabs page' },
];

export const App = () => {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({ type: 'setTabs', payload: tabs });
    dispatch({ type: 'setPages', payload: pages });
  }, [dispatch]);

  return (
    <>
      <NavBar />

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
