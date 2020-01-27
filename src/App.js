import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <main className="App">
      </main>
    </Provider>
  );
}

export default App;
