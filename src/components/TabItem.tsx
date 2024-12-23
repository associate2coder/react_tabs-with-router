import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StateContext } from '../store/GlobalContextProvider';

export const TabItem: React.FC = () => {
  const { tabId } = useParams();
  const { tabs } = useContext(StateContext);
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {currentTab ? currentTab.content : 'Please select a tab'}
    </div>
  );
};
