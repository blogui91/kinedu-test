import React from 'react';
import './app.scss';

// React Redux
import reduxStore from './store';
import { Provider } from 'react-redux';

import Navbar from 'components/Navbar';
import Home from 'src/pages/Home.jsx';

const store = reduxStore()

function App (props) {

  return (
    <Provider store={store}>
      <Navbar fixed={true}/>
      <div className="container">
        <Home />
      </div>
    </Provider>
  )
}

export default App
