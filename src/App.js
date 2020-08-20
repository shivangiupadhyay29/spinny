import React from 'react';
import { Provider } from 'react-redux';
import AppStore from './store';

import './App.css';
import * as Block from './containers';

function App() {
  return (
  <Provider store={AppStore}>
            <div className='box'>
                  <div className="container">
                          <Block.SearchBox />
                          <Block.List/>
                  </div>
          </div>
  </Provider>
  );
}

export default App;
