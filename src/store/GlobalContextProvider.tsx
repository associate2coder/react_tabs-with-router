import React, { useReducer } from 'react';
import { RootState } from '../types/RootState';
import { Action } from '../types/Action';

interface Props {
  children: React.ReactNode;
}

const initialState: RootState = {
  tabs: [],
  pages: [],
  errorMessage: '',
};

export const DispatchContext = React.createContext<React.Dispatch<Action>>(
  () => {},
);

export const StateContext = React.createContext<RootState>(initialState);

const reducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case 'setTabs':
      return {
        ...state,
        tabs: action.payload,
      };

    case 'setPages':
      return {
        ...state,
        pages: action.payload,
      };

    default:
      return state;
  }
};

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
