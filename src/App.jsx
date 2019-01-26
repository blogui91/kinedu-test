import React from 'react';
import './app.scss';

// React Redux
import { Provider } from 'react-redux';
import Navbar from 'components/Navbar';
import Home from 'src/pages/Home.jsx';
import reduxStore from './store';

const store = reduxStore();
function App(props) {
  return (
    <Provider store={store}>
      <Navbar fixed {...props} />
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
