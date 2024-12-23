import { useContext } from 'react';
import { StateContext } from '../store/GlobalContextProvider';

export const Home: React.FC = () => {
  const { pages } = useContext(StateContext);
  const homePage = pages.find(page => page.id === 'home');

  return <h1 className="title">{homePage?.content}</h1>;
};
