import React from 'react';
import routes from './routes';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          
          {routes}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
