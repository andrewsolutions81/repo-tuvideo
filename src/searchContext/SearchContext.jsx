/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer } from 'react';

export const SearchContext = createContext();

const initialState = {
  query: '',
  toggle: false,
  untoggle: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'typing':
      return { ...state, query: action.payload };
    case 'toggleButton':
      return { ...state, toggle: !state.toggle };
    case 'untoggleButton':
      return { ...state, untoggle: !state.untoggle };
    case 'clearTyping':
      return { ...state, query: '' };
    default:
      return state;
  }
}
export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = {
    state,
    dispatch,
  };
  return (
    <SearchContext.Provider value={store}>
      { children }
    </SearchContext.Provider>
  );
}
