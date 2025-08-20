import React, { useReducer } from 'react';
import AppContext from './components/context';
import reducer from './components/reducer';
import Project1 from './components/Project1';

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Project1 />
    </AppContext.Provider>
  );
}

export default App;
